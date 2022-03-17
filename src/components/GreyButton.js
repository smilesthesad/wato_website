import React from "react";
import { Link } from "gatsby";
import * as styles from "./GreyButton.module.scss";
export default function GreyButton(props) {
  return (
    <Link to={props.href} className={`${styles.greyButton}`}>
      {props.children}
    </Link>
  );
}
