import React from "react";
import * as styles from "./ResearchProject.module.scss";
import { CardActionArea, CardContent, CardMedia } from "@mui/material";
export default function ResearchProject(props) {
  return (
    <div className={styles.cardActionArea}>
      <CardActionArea>
        <CardMedia>
          <img
            src={props.image}
            alt="research project"
            className={styles.cardImage}
          />
        </CardMedia>
        <CardContent>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </CardContent>
      </CardActionArea>
    </div>
  );
}
