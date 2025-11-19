import React, { useEffect, useState, useContext } from "react";
import styles from "./Users.module.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { FaTrash } from "react-icons/fa";

export default function Users() {
  const { token } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/auth", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch (err) {
      console.error(err);
      setError("İstifadəçilər yüklənmədi!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bu istifadəçini silmək istədiyinizə əminsiniz?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/auth/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(users.filter((u) => u._id !== id));
    } catch (err) {
      console.error("Silinmə zamanı xəta:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Yüklənir...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.container}>
      <h2>İstifadəçilər</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Rezervasiyalar</th>
            <th>Əməliyyatlar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id.slice(-6)}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone || "—"}</td>
              <td>{user.reservations?.length || 0}</td>
              <td>
                <button
                  onClick={() => handleDelete(user._id)}
                  className={styles.delete}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
