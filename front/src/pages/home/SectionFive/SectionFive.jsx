import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SectionFive.module.css";

export default function SectionFive() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "This was one of the best experiences of my life. Highly recommend TourismCo!",
      avatar: "/images/user1.webp"
    },
    {
      id: 2,
      name: "David Kim",
      text: "Seamless booking, amazing guides, and unforgettable memories. A top-tier service.",
      avatar: "/images/user2.webp"
    },
    {
      id: 3,
      name: "Maria Lopez",
      text: "Every detail was taken care of. Hotels, transfers, and tours exceeded my expectations.",
      avatar: "/images/user3.webp"
    }
  ];

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        <h2>What Our Travelers Say</h2>
        <Slider
          dots
          infinite
          speed={600}
          slidesToShow={2}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={5000}
          responsive={[{ breakpoint: 1024, settings: { slidesToShow: 1 } }]}
          className={styles.testimonialCarousel}
        >
          {reviews.map((review) => (
            <div key={review.id} className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <img src={review.avatar} alt={review.name} className={styles.avatar} />
                <div>
                  <h3>{review.name}</h3>
                  <div className={styles.stars}>★★★★★</div>
                </div>
              </div>
              <p>{review.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
