import React from "react";
import Link from "next/link";
import styles from "./BlueButton.module.scss";
export default function BlueButton(props) {
  return (
    <Link href={props.href}>
      <a className={styles.blueButton}>{props.children}</a>
    </Link>
  );
}
