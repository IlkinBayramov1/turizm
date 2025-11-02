import React from "react";
import styles from "./SectionOne.module.css";

export default function SectionOne() {
  return (
    <section className={styles.hero} role="region" aria-label="Booking Hero">
      <div className={styles.content}>
        <h1>Book Your Tour</h1>
        <p>
          Secure your spot for unforgettable adventures with premium comfort
          and authentic experiences.
        </p>
      </div>
    </section>
  );
}
