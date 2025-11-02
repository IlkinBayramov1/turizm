import React from "react";
import styles from "./SectionTwo.module.css";

export default function SectionTwo() {
  return (
    <div className={styles.bookingForm}>
      <h2>Reservation Details</h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="+123 456 7890" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="tour">Select Tour</label>
          <select id="tour" name="tour" required>
            <option value="">Choose a tour</option>
            <option value="mountains">Mountain Adventure</option>
            <option value="beach">Beach Escape</option>
            <option value="city">City Explorer</option>
            <option value="cultural">Cultural Journey</option>
          </select>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="date">Preferred Date</label>
            <input type="date" id="date" name="date" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="guests">Number of Guests</label>
            <input type="number" id="guests" name="guests" min="1" max="20" defaultValue="1" required />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="requests">Special Requests</label>
          <textarea
            id="requests"
            name="requests"
            rows="4"
            placeholder="Let us know about dietary needs, accessibility, or special requests..."
          ></textarea>
        </div>

        <button type="submit" className={styles.bookingBtn}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
