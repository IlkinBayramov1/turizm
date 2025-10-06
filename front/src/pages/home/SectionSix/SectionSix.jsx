import React from "react";
import styles from "./SectionSix.module.css";

export default function SectionSix() {
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          <details>
            <summary>
              <span>How do I book a tour?</span>
              <span className={styles.icon}>+</span>
            </summary>
            <p>You can book directly through our website by clicking “Book Now”.</p>
          </details>
          <details>
            <summary>
              <span>Can I cancel or reschedule?</span>
              <span className={styles.icon}>+</span>
            </summary>
            <p>Yes, cancellations and reschedules are possible depending on the tour. Check our policy for details.</p>
          </details>
          <details>
            <summary>
              <span>Do you offer group discounts?</span>
              <span className={styles.icon}>+</span>
            </summary>
            <p>Yes, we offer special pricing for groups of 10 or more. Contact us for info.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
