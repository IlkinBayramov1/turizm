import React from "react";
import styles from "./SectionTwo.module.css";
import aboutImage from "../../../assets/about-overview.webp"; // şəkli import edirik

export default function SectionTwo() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.aboutImage}>
          <img
            src={aboutImage} // import edilmiş şəkil burada istifadə olunur
            alt="Travelers exploring scenic landscapes"
            loading="lazy"
          />
        </div>
        <div className={styles.aboutContent}>
          <h2>About TourismCo</h2>
          <p>
            At TourismCo, we are passionate about delivering premium travel
            experiences. Whether it’s an intimate local adventure or a grand
            international escape, we bring people closer to culture, nature, and
            authentic activities worldwide.
          </p>
          <a href="/about" className={styles.link}>Learn More →</a>
        </div>
      </div>
    </section>
  );
}
