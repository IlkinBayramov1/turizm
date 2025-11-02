import React from "react";
import styles from "./SectionOne.module.css";

export default function SectionOne() {
  return (
    <section
      className={`${styles.hero} ${styles.noImage}`}
      role="region"
      aria-label="About TourismCo Hero"
    >
      <div className={styles.content}>
        <h1>About TourismCo</h1>
        <p>
          Creating unforgettable journeys with premium comfort, authenticity,
          and cultural immersion worldwide.
        </p>
      </div>
    </section>
  );
}
