import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaMapMarkedAlt, FaRegCalendarAlt, FaCog } from "react-icons/fa";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>Admin Panel</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ""}>
              <FaTachometerAlt /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className={({ isActive }) => isActive ? styles.active : ""}>
              <FaUsers /> Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/tours" className={({ isActive }) => isActive ? styles.active : ""}>
              <FaMapMarkedAlt /> Tours
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservations" className={({ isActive }) => isActive ? styles.active : ""}>
              <FaRegCalendarAlt /> Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => isActive ? styles.active : ""}>
              <FaCog /> Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
