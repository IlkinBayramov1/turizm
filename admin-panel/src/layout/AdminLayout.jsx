import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import styles from "./AdminLayout.module.css"; // CSS Module istifadə etmək daha təhlükəsizdir

export default function AdminLayout() {
  return (
    <div className={styles.adminLayout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Navbar />
        <main className={styles.pageContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
