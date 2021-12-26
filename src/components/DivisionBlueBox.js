import React from "react";
import * as styles from "./DivisionBlueBox.module.scss";
export default function DivisionBlueBox(props) {
  return (
    <div className={styles.blueBox}>
      <h2>{props.groupName}</h2>
      {props.children}
    </div>
  );
}
