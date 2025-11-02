import React from "react";
import styles from "./SectionFour.module.css";

export default function SectionFour() {
  const reasons = [
    {
      icon: "🌍",
      title: "Global Reach",
      desc: "Explore destinations across the world with curated tours and exclusive access.",
    },
    {
      icon: "⭐",
      title: "Luxury Service",
      desc: "Enjoy premium transfers, five-star accommodations, and personal concierge support.",
    },
    {
      icon: "🤝",
      title: "Trusted Expertise",
      desc: "Our experienced guides and travel experts bring destinations to life with passion and care.",
    },
    {
      icon: "💎",
      title: "Exclusive Experiences",
      desc: "From private tours to cultural encounters, we offer one-of-a-kind travel moments.",
    },
  ];

  return (
    <section className={styles.whyChooseUs}>
      <h2>Why Choose Us?</h2>
      <div className={styles.whyGrid}>
        {reasons.map((item, idx) => (
          <div key={idx} className={styles.whyCard}>
            <span className={styles.icon}>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
