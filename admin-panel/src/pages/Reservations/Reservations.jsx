import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import styles from "./Reservations.module.css";
import { AuthContext } from "../../context/AuthContext";
import { formatDate } from "../../utils/formatDate";
import { STATUS } from "../../utils/constants";

export default function Reservations() {
  const { token } = useContext(AuthContext);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchReservations = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/reservations", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setReservations(res.data);
    } catch (err) {
      setError("Rezervasiyalar yüklənmədi!");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(
        `http://localhost:5000/api/reservations/${id}/status`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchReservations();
    } catch (err) {
      console.error("Status dəyişdirilmədi", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bu rezervasiyanı silmək istədiyinizə əminsinizmi?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/reservations/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setReservations(reservations.filter((r) => r._id !== id));
    } catch (err) {
      console.error("Silinmədi", err);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  if (loading) return <p>Yüklənir...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.container}>
      <h2>Tur Rezervasiyaları</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>İstifadəçi</th>
            <th>Tur</th>
            <th>Tarix</th>
            <th>Status</th>
            <th>Əməliyyatlar</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((r) => (
            <tr key={r._id}>
              <td>{r._id.slice(-6)}</td>
              <td>{r.user?.name || "—"}</td>
              <td>{r.tourId?.title || "—"}</td>
              <td>{formatDate(r.createdAt)}</td>
              <td>
                <span
                  className={`${styles.status} ${styles[r.status?.toLowerCase()] || ""}`}
                >
                  {r.status}
                </span>
              </td>
              <td>
                {r.status !== STATUS.CONFIRMED && (
                  <button
                    onClick={() => handleStatusChange(r._id, STATUS.CONFIRMED)}
                    className={styles.approve}
                  >
                    Təsdiqlə
                  </button>
                )}
                {r.status !== STATUS.COMPLETED && (
                  <button
                    onClick={() => handleStatusChange(r._id, STATUS.COMPLETED)}
                    className={styles.cancel}
                  >
                    Tamamlandı
                  </button>
                )}
                <button
                  onClick={() => handleDelete(r._id)}
                  className={styles.delete}
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
