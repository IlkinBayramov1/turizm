import React from "react";
import styles from "./About.module.css";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";
import SectionFour from "./SectionFour/SectionFour";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}
 