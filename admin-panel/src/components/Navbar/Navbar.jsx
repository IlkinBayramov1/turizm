import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.module.css";

export default function Navbar() {
  const { admin, logout } = useContext(AuthContext);

  return (
    <header className="navbar">
      <h3>Welcome, {admin?.name}</h3>
      <button onClick={logout}>Logout</button>
    </header>
  );
}
