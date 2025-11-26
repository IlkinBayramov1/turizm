import React, { useEffect, useState } from "react";
import styles from "./Tours.module.css";
import tourService from "../../services/tourService";
import { FaTrash, FaPlus, FaEdit, FaSave, FaTimes } from "react-icons/fa";

export default function Tours() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);

  const emptyTour = {
    title: "",
    description: "",
    price: "",
    startDate: "",
    endDate: "",
    image: "",
    category: "local",
    totalSeats: "",
    availableSeats: "",
    discountCode: "",
  };

  const [newTour, setNewTour] = useState({ ...emptyTour });
  const [editTour, setEditTour] = useState({ ...emptyTour });

  // Turları çəkmək
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

  // Yeni tur əlavə et
  const handleAddTour = async (e) => {
    e.preventDefault();
    const payload = {
      ...newTour,
      price: Number(newTour.price),
      totalSeats: Number(newTour.totalSeats),
      availableSeats: Number(newTour.availableSeats),
      images: [newTour.image],
    };
    try {
      await tourService.createTour(payload);
      setNewTour({ ...emptyTour });
      fetchTours();
    } catch (err) {
      console.error("Error creating tour:", err.response?.data || err.message);
      alert("Tur əlavə edilərkən xəta baş verdi");
    }
  };

  // Sil
  const handleDelete = async (id) => {
    if (!window.confirm("Bu turu silmək istədiyinə əminsən?")) return;
    try {
      await tourService.deleteTour(id);
      setTours(tours.filter((t) => t._id !== id));
    } catch (err) {
      alert("Silinmə zamanı xəta baş verdi");
    }
  };

  // Redaktəyə başla
  const handleEdit = (tour) => {
    setEditId(tour._id);
    setEditTour({
      title: tour.title,
      description: tour.description,
      price: tour.price,
      startDate: tour.startDate?.substring(0, 10),
      endDate: tour.endDate?.substring(0, 10),
      image: tour.images?.[0] || "",
      category: tour.category,
      totalSeats: tour.totalSeats,
      availableSeats: tour.availableSeats,
      discountCode: tour.discountCode,
    });
  };

  // Redaktəni ləğv et
  const handleCancel = () => {
    setEditId(null);
  };

  // Redaktəni yadda saxla
  const handleSave = async (id) => {
    const payload = {
      ...editTour,
      price: Number(editTour.price),
      totalSeats: Number(editTour.totalSeats),
      availableSeats: Number(editTour.availableSeats),
      images: [editTour.image],
    };
    try {
      await tourService.updateTour(id, payload);
      setEditId(null);
      fetchTours();
    } catch (err) {
      alert("Update zamanı xəta baş verdi");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Yeni Tur Əlavə Et</h2>

      <form onSubmit={handleAddTour} className={styles.addForm}>
        <input type="text" placeholder="Tur adı" value={newTour.title} onChange={(e) => setNewTour({ ...newTour, title: e.target.value })} required />
        <textarea placeholder="Açıqlama" value={newTour.description} onChange={(e) => setNewTour({ ...newTour, description: e.target.value })} />
        <input type="number" placeholder="Qiymət" value={newTour.price} onChange={(e) => setNewTour({ ...newTour, price: e.target.value })} required />
        <input type="date" value={newTour.startDate} onChange={(e) => setNewTour({ ...newTour, startDate: e.target.value })} />
        <input type="date" value={newTour.endDate} onChange={(e) => setNewTour({ ...newTour, endDate: e.target.value })} />
        <input type="text" placeholder="Şəkil URL" value={newTour.image} onChange={(e) => setNewTour({ ...newTour, image: e.target.value })} />
        <select value={newTour.category} onChange={(e) => setNewTour({ ...newTour, category: e.target.value })}>
          <option value="local">Local</option>
          <option value="international">International</option>
          <option value="VIP">VIP</option>
        </select>
        <input type="number" placeholder="Ümumi yer" value={newTour.totalSeats} onChange={(e) => setNewTour({ ...newTour, totalSeats: e.target.value })} />
        <input type="number" placeholder="Boş yer" value={newTour.availableSeats} onChange={(e) => setNewTour({ ...newTour, availableSeats: e.target.value })} />
        <input type="text" placeholder="Endirim kodu" value={newTour.discountCode} onChange={(e) => setNewTour({ ...newTour, discountCode: e.target.value })} />
        <button type="submit"><FaPlus /> Əlavə et</button>
      </form>

      <h2>Mövcud Turlar</h2>

      {loading ? (
        <p>Yüklənir...</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Ad</th>
              <th>Qiymət</th>
              <th>Kateqoriya</th>
              <th>Əməliyyat</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => (
              <tr key={tour._id}>
                <td>
                  {editId === tour._id ? (
                    <input value={editTour.title} onChange={(e) => setEditTour({ ...editTour, title: e.target.value })} />
                  ) : (
                    tour.title
                  )}
                </td>
                <td>
                  {editId === tour._id ? (
                    <input type="number" value={editTour.price} onChange={(e) => setEditTour({ ...editTour, price: e.target.value })} />
                  ) : (
                    tour.price + " ₼"
                  )}
                </td>
                <td>{tour.category}</td>
                <td>
                  {editId === tour._id ? (
                    <>
                      <input placeholder="Açıqlama" value={editTour.description} onChange={(e) => setEditTour({ ...editTour, description: e.target.value })} />
                      <input type="date" value={editTour.startDate} onChange={(e) => setEditTour({ ...editTour, startDate: e.target.value })} />
                      <input type="date" value={editTour.endDate} onChange={(e) => setEditTour({ ...editTour, endDate: e.target.value })} />
                      <input type="text" placeholder="Şəkil URL" value={editTour.image} onChange={(e) => setEditTour({ ...editTour, image: e.target.value })} />
                      <select value={editTour.category} onChange={(e) => setEditTour({ ...editTour, category: e.target.value })}>
                        <option value="local">Local</option>
                        <option value="international">International</option>
                        <option value="VIP">VIP</option>
                      </select>
                      <input type="number" placeholder="Ümumi yer" value={editTour.totalSeats} onChange={(e) => setEditTour({ ...editTour, totalSeats: e.target.value })} />
                      <input type="number" placeholder="Boş yer" value={editTour.availableSeats} onChange={(e) => setEditTour({ ...editTour, availableSeats: e.target.value })} />
                      <input type="text" placeholder="Endirim kodu" value={editTour.discountCode} onChange={(e) => setEditTour({ ...editTour, discountCode: e.target.value })} />
                      <button onClick={() => handleSave(tour._id)} className={styles.saveBtn}><FaSave /></button>
                      <button onClick={handleCancel} className={styles.cancelBtn}><FaTimes /></button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(tour)} className={styles.editBtn}><FaEdit /></button>
                      <button onClick={() => handleDelete(tour._id)} className={styles.deleteBtn}><FaTrash /></button>
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
