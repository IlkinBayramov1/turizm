import React from "react";
import styles from "./SectionOne.module.css";

export default function SectionOne() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Get in Touch</h1>
        <p>
          Have questions or need assistance? Reach out to us anytime – we’re
          here to help make your journey unforgettable.
        </p>
      </div>
    </section>
  );
}
