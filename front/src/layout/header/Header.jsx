import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.headerInner}>
        <Link to="/" className={styles.logo} aria-label="TourismCo Home">
          TourismCo
        </Link>
        <nav className={styles.nav} role="navigation" aria-label="Main navigation">
          <ul>
            <li><Link to="/" className={styles.navLink}>Home</Link></li>
            <li><Link to="/tours" className={styles.navLink}>Tours</Link></li>
            <li><Link to="/about" className={styles.navLink}>About Us</Link></li>
            <li><Link to="/contact" className={styles.navLink}>Contact</Link></li>
          </ul>
        </nav>
        <Link to="/booking" className={styles.bookBtn}>Book Now</Link>
      </div>
    </header>
  );
}
