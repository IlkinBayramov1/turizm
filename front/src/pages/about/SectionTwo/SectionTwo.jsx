import React from "react";
import styles from "./SectionTwo.module.css";
import image from "../../../assets/tourism-banner.webp";

export default function SectionTwo() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutGrid}>
        <div className={styles.aboutImage}>
          <img
            src={image}
            alt="Travelers enjoying scenic landscapes"
            loading="lazy"
          />
        </div>

        <div className={styles.aboutContent}>
          <h2>Our Story</h2>
          <p>
            TourismCo was founded with a passion for redefining travel...
          </p>

          <div className={styles.stats}>
            <div><h3>500+</h3><p>Tours Worldwide</p></div>
            <div><h3>98%</h3><p>Traveler Satisfaction</p></div>
            <div><h3>30+</h3><p>Countries Reached</p></div>
          </div>

          <a href="/contact" className={styles.btnLink}>Get in Touch →</a>
        </div>
      </div>
    </section>
  );
}
