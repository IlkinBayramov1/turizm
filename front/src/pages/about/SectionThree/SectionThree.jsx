import React from "react";
import styles from "./SectionThree.module.css";

export default function SectionThree() {
  const values = [
    {
      title: "Excellence",
      desc: "We aim for the highest standards in every aspect of travel, ensuring comfort and quality.",
      icon: "🏆",
    },
    {
      title: "Authenticity",
      desc: "Every tour is designed to immerse travelers in real cultures and meaningful experiences.",
      icon: "🌍",
    },
    {
      title: "Innovation",
      desc: "We use modern tools and creative solutions to enhance travel and create unique journeys.",
      icon: "💡",
    },
    {
      title: "Sustainability",
      desc: "Our practices prioritize eco-friendly solutions to preserve destinations for future generations.",
      icon: "🌱",
    },
  ];

  return (
    <>
      <section className={styles.missionVision}>
        <div className={styles.mvCard}>
          <span className={styles.mvIcon}>🎯</span>
          <h2>Our Mission</h2>
          <p>
            To deliver exceptional travel experiences that inspire exploration,
            foster cultural connections, and provide seamless comfort at every
            step of the journey.
          </p>
        </div>

        <div className={styles.mvCard}>
          <span className={styles.mvIcon}>🌟</span>
          <h2>Our Vision</h2>
          <p>
            To be a global leader in premium tourism by combining innovation,
            sustainability, and authentic experiences that enrich travelers’ lives.
          </p>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <h2>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, idx) => (
              <div key={idx} className={styles.valueCard}>
                <span className={styles.valueIcon}>{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
