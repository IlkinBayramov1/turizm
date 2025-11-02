// SectionFour.jsx
import React from "react";
import styles from "./SectionFour.module.css";

export default function SectionFour() {
  return (
    <section className={styles.mapSection}>
      <div className={styles.container}>
        <h2>Find Us on the Map</h2>
        <div className={styles.mapWrapper}>
          <iframe
            title="TourismCo Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019442781637!2d-122.41941508468262!3d37.774929779759975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d5b8b7b1%3A0xaee1d9aebebfc1b6!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1696590000000!5m2!1sen!2sus"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
