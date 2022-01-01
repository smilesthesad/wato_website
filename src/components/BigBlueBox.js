import React from "react";
import * as styles from "./BigBlueBox.module.scss";
export default function BigBlueBox(props) {
  return (
    <div className={styles.blueBox}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}
