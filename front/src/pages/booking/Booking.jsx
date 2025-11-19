import React from "react";
import styles from "./Booking.module.css";

import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";

export default function Booking() {
  return (
    <div className={styles.bookingPage}>
      <SectionOne />
      <section className={styles.bookingContainer}>
        <div className={styles.bookingGrid}>
          <SectionTwo />
          <SectionThree />
        </div>
      </section>
      <SectionFour />
    </div>
  );
}
