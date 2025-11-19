import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { admin, logout } = useContext(AuthContext);

  return (
    <header className={styles.navbar}>
      <h3>
        Welcome, {admin?.firstName ? `${admin.firstName} ${admin.lastName}` : "Admin"}
      </h3>
      <button className={styles.logoutBtn} onClick={logout}>
        Logout
      </button>
    </header>
  );
}
