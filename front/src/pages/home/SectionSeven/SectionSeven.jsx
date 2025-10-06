import React from "react";
import styles from "./SectionSeven.module.css";

export default function SectionSeven() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaContent}>
        <h2>Ready for Your Next Adventure?</h2>
        <a href="/booking" className={styles.btnCta}>Book Your Tour Now</a>
      </div>
    </section>
  );
}
