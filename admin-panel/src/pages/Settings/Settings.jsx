import React, { useEffect, useState, useContext } from "react";
import styles from "./Settings.module.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Settings() {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  // Profil məlumatlarını çəkmək
  const fetchProfile = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
      setForm({
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email,
        phone: res.data.phone || "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error(err);
      setMessage("Profil məlumatları yüklənmədi!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password && form.password !== form.confirmPassword) {
      setMessage("Şifrə və təsdiq uyğun gəlmir!");
      return;
    }

    try {
      const updatedData = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
      };
      if (form.password) updatedData.password = form.password;

      const res = await axios.put("http://localhost:5000/api/admin/profile", updatedData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessage("Profil uğurla yeniləndi!");
      fetchProfile();
      setForm({ ...form, password: "", confirmPassword: "" });
    } catch (err) {
      console.error(err);
      setMessage("Profil yenilənmədi!");
    }
  };

  if (loading) return <p>Yüklənir...</p>;

  return (
    <div className={styles.container}>
      <h2>Settings</h2>
      {message && <p className={styles.message}>{message}</p>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Ad</label>
        <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />

        <label>Soyad</label>
        <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />

        <label>Telefon</label>
        <input type="text" name="phone" value={form.phone} onChange={handleChange} />

        <label>Yeni şifrə</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} />

        <label>Şifrəni təsdiqlə</label>
        <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />

        <button type="submit">Yenilə</button>
      </form>
    </div>
  );
}
