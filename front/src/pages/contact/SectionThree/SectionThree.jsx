import React from "react";
import styles from "./SectionThree.module.css";

export default function SectionThree() {
  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <h2>Send Us a Message</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Write your message..." required></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>Send Message</button>
        </form>
      </div>
    </section>
  );
}
