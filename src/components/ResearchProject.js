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
        <CardContent
          style={{
            backgroundColor: "white",
            borderRadius: "0 0 10px 10px",
          }}
        >
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </CardContent>
      </CardActionArea>
    </div>
  );
}
