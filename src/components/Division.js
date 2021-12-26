import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Division(props) {
  return (
    <>
      <h1>{props.name}</h1>
      {props.images.map((image) => (
        <>
          <StaticImage src={image.title} className={styles.teamPhoto} />
          <h1>{image.name}</h1>
          <h2>{image.role}</h2>
        </>
      ))}
    </>
  );
}
