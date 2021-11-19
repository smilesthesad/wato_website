import React from "react";
import { Link } from "gatsby";
import * as styles from "./BlueButton.module.scss";
export default function BlueButton(props) {
  return (
    <Link to={props.href} className={styles.blueButton}>
      {props.children}
    </Link>
  );
}
