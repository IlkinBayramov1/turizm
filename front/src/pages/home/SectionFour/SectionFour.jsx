import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faHotel, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./SectionFour.module.css";

export default function SectionFour() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <h2>Our Services</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.iconWrap}>
              <FontAwesomeIcon icon={faCar} />
            </div>
            <h3>Transfers</h3>
            <p>
              Seamless airport and city transfers ensuring a hassle-free journey
              with premium comfort and reliability.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.iconWrap}>
              <FontAwesomeIcon icon={faHotel} />
            </div>
            <h3>Hotels</h3>
            <p>
              Handpicked hotels offering modern amenities and an elevated experience
              during your travels.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.iconWrap}>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </div>
            <h3>Guides</h3>
            <p>
              Expert local guides sharing stories, culture, and insights
              that enrich your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
