import { Typography } from "@mui/material";
import React from "react";
import * as styles from "./BigBlueBox.module.scss";
export default function BigBlueBox(props) {
  return (
    <div className={styles.blueBox}>
      <Typography variant="h4">
      <b>{props.title}</b>
      </Typography>
      <Typography variant="h6">
      {props.children}
      </Typography>
    </div>
  );
}
