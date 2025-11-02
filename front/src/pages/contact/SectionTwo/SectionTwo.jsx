import React from "react";
import styles from "./SectionTwo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SectionTwo() {
  return (
    <section className={styles.contactInfo}>
      <div className={styles.container}>
        <h2>Contact Information</h2>
        <p className={styles.tagline}>
          We’d love to hear from you! Choose your preferred method below.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
            <div>
              <strong>Address</strong>
              <p>123 Travel Street, Adventure City</p>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} />
            <div>
              <strong>Phone</strong>
              <p><a href="tel:+1234567890">+123 456 7890</a></p>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <div>
              <strong>Email</strong>
              <p><a href="mailto:info@tourismco.com">info@tourismco.com</a></p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
