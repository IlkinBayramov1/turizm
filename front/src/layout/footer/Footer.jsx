import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`${styles.container} ${styles.footerGrid}`}>
        <div>
          <h3 className={styles.heading}>About</h3>
          <p className={styles.text}>
            TourismCo is your trusted partner for exclusive and memorable
            travel journeys, blending comfort with exploration.
          </p>
        </div>
        <div>
          <h3 className={styles.heading}>Contact</h3>
          <ul className={styles.list}>
            <li>Email: <a href="mailto:info@tourismco.com" className={styles.link}>info@tourismco.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className={styles.link}>+123 456 7890</a></li>
            <li>Address: 123 Travel St, Adventure City</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul className={styles.list}>
            <li><Link to="/" className={styles.link}>Home</Link></li>
            <li><Link to="/tours" className={styles.link}>Tours</Link></li>
            <li><Link to="/about" className={styles.link}>About Us</Link></li>
            <li><Link to="/contact" className={styles.link}>Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerSocial}>
        {/* Burada sosial ikonlar varsa */}
        <a href="#" className={styles.socialLink}>F</a>
        <a href="#" className={styles.socialLink}>T</a>
        <a href="#" className={styles.socialLink}>I</a>
      </div>

      <div className={styles.copyright}>
        © {new Date().getFullYear()} TourismCo. All rights reserved.
      </div>
    </footer>
  );
}
