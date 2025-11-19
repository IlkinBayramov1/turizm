import React, { useEffect, useState } from "react";
import styles from "./Tours.module.css";
import tourService from "../../services/tourService";
import { FaTrash, FaPlus, FaEdit, FaSave, FaTimes } from "react-icons/fa";

export default function Tours() {
  const [tours, setTours] = useState([]);
  const [newTour, setNewTour] = useState({ title: "", location: "", price: "" });
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editTour, setEditTour] = useState({ title: "", location: "", price: "" });

  // 1️⃣ Turları çəkmək
  const fetchTours = async () => {
    setLoading(true);
    try {
      const data = await tourService.getAllTours();
      setTours(data);
    } catch (err) {
      console.error("Error fetching tours:", err.response?.data || err.message);
      alert("Turlar yüklənmədi!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // 2️⃣ Yeni tur əlavə et
  const handleAddTour = async (e) => {
    e.preventDefault();
    try {
      await tourService.createTour({ ...newTour, price: Number(newTour.price) });
      setNewTour({ title: "", location: "", price: "" });
      fetchTours();
    } catch (err) {
      console.error("Error creating tour:", err.response?.data || err.message);
      alert("Tur əlavə edilərkən xəta baş verdi");
    }
  };

  // 3️⃣ Tur sil
  const handleDelete = async (id) => {
    if (!window.confirm("Bu turu silmək istədiyinə əminsən?")) return;
    try {
      await tourService.deleteTour(id);
      setTours(tours.filter((t) => t._id !== id));
    } catch (err) {
      console.error("Error deleting tour:", err.response?.data || err.message);
      alert("Silinmə zamanı xəta baş verdi");
    }
  };

  // 4️⃣ Redaktəyə başla
  const handleEdit = (tour) => {
    setEditId(tour._id);
    setEditTour({ title: tour.title, location: tour.location, price: tour.price });
  };

  // 5️⃣ Redaktəni ləğv et
  const handleCancel = () => {
    setEditId(null);
    setEditTour({ title: "", location: "", price: "" });
  };

  // 6️⃣ Redaktəni yadda saxla
  const handleSave = async (id) => {
    try {
      await tourService.updateTour(id, { ...editTour, price: Number(editTour.price) });
      setEditId(null);
      setEditTour({ title: "", location: "", price: "" });
      fetchTours();
    } catch (err) {
      console.error("Error updating tour:", err.response?.data || err.message);
      alert("Update zamanı xəta baş verdi");
    }
  };

  // 7️⃣ Render
  return (
    <div className={styles.container}>
      <h2>Turlar</h2>

      <form onSubmit={handleAddTour} className={styles.addForm}>
        <input
          type="text"
          placeholder="Tur adı"
          value={newTour.title}
          onChange={(e) => setNewTour({ ...newTour, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Məkan"
          value={newTour.location}
          onChange={(e) => setNewTour({ ...newTour, location: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Qiymət"
          value={newTour.price}
          onChange={(e) => setNewTour({ ...newTour, price: e.target.value })}
          required
        />
        <button type="submit">
          <FaPlus /> Əlavə et
        </button>
      </form>

      {loading ? (
        <p>Yüklənir...</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Ad</th>
              <th>Məkan</th>
              <th>Qiymət</th>
              <th>Əməliyyat</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => (
              <tr key={tour._id}>
                <td>
                  {editId === tour._id ? (
                    <input
                      value={editTour.title}
                      onChange={(e) => setEditTour({ ...editTour, title: e.target.value })}
                    />
                  ) : (
                    tour.title
                  )}
                </td>
                <td>
                  {editId === tour._id ? (
                    <input
                      value={editTour.location}
                      onChange={(e) => setEditTour({ ...editTour, location: e.target.value })}
                    />
                  ) : (
                    tour.location
                  )}
                </td>
                <td>
                  {editId === tour._id ? (
                    <input
                      type="number"
                      value={editTour.price}
                      onChange={(e) => setEditTour({ ...editTour, price: e.target.value })}
                    />
                  ) : (
                    tour.price + " ₼"
                  )}
                </td>
                <td>
                  {editId === tour._id ? (
                    <>
                      <button onClick={() => handleSave(tour._id)} className={styles.saveBtn}>
                        <FaSave />
                      </button>
                      <button onClick={handleCancel} className={styles.cancelBtn}>
                        <FaTimes />
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(tour)} className={styles.editBtn}>
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(tour._id)} className={styles.deleteBtn}>
                        <FaTrash />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
