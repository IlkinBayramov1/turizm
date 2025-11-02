import { NavLink } from "react-router-dom";
import "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">Admin Panel</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/tours">Tours</NavLink>
          </li>
          <li>
            <NavLink to="/reservations">Reservations</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
