import React from "react";
import Slider from "react-slick";
import styles from "./SectionThree.module.css";

export default function SectionThree() {
  const tours = [
    { id: 1, title: "Exciting Tour 1", img: "/images/tourpack.jpg" },
    { id: 2, title: "Exciting Tour 2", img: "/images/tourpack.jpg" },
    { id: 3, title: "Exciting Tour 3", img: "/images/tourpack.jpg" },
    { id: 4, title: "Exciting Tour 4", img: "/images/tourpack.jpg" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className={styles.tours} id="tours">
      <div className="container">
        <h2>Recent Tours</h2>
        <Slider {...sliderSettings} className={styles.tourCarousel}>
          {tours.map((tour) => (
            <article key={tour.id} className={styles.tourCard}>
              <img src={tour.img} alt={tour.title} loading="lazy" />
              <div className={styles.tourContent}>
                <h3>{tour.title}</h3>
                <p>
                  A curated journey offering adventure, relaxation, and cultural immersion.
                </p>
                <a href="/tours/details" className="link">View Details →</a>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
}
