import React from "react";
import * as styles from "./Sponsors.module.scss";
export default function Sponsor() {
  return (
    <div className={styles.sponsor}>
      <img src={props.image} alt="sponsor" className={styles.sponsorImage} />
      {props.children}
    </div>
  );
}
