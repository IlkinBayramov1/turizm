import React from "react";
import styles from "./SectionOne.module.css";

export default function SectionOne() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: "url('/images/tourism-banner.webp')" }}
      role="region"
      aria-label="Hero section"
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.heroTitle}>Discover Your Next Adventure</h1>
        <p className={styles.heroSubtitle}>
          Explore breathtaking destinations, curated tours, and unforgettable
          experiences designed to create lifelong memories.
        </p>
        <a href="/tours" className={styles.heroBtn}>Explore Tours</a>
      </div>
    </section>
  );
}
