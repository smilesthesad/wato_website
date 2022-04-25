import React from "react";
import Layout from "../components/Layout";
import BlueButton from "../components/BlueButton";
import * as styles from "./about.module.scss";
import { Typography } from "@mui/material";
export default function About() {
  return (
    <Layout>
      <div className={styles.teamDesc}>
        <Typography variant="h4"><b>Our Team</b></Typography>
        <Typography variant="h5">
          WATonomous is the University of Waterloo's first student-run
          autonomous car team. Our diverse team comprises of students from every
          faculty
        </Typography>
        <div className={styles.aboutButtons}>
          <BlueButton>Learn more</BlueButton>
          <BlueButton>Apply now!</BlueButton>
          <BlueButton>Resources</BlueButton>
        </div>
        {/* <Division name="Software" desc="Dolor sunt pariatur ea ad esse commodo."> */}
        <h1> Directors</h1>
        <h1>Software Division</h1>
        <h1>Mechanical Division</h1>
        <h1>Electrical Division</h1>
        <h1>Business Division</h1>
      </div>
    </Layout>
  );
}
