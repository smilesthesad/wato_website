import React from "react";
import Layout from "../components/Layout";
import BlueButton from "../components/BlueButton";
import * as styles from "./about.module.scss";
export default function About() {
  return (
    <Layout>
      <div className="teamDesc">
        <h1>Our Team</h1>
        <h3>
          WATonomous is the University of Waterloo's first student-run
          autonomous car team. Our diverse team comprises of students from every
          faculty
        </h3>
        <div className={styles.aboutButtons}>
          <BlueButton>Learn more</BlueButton>
          <BlueButton>Apply now!</BlueButton>
          <BlueButton>Resources</BlueButton>
        </div>
        <h1> Directors</h1>
        {/* <Division name="Software" desc="Dolor sunt pariatur ea ad esse commodo."> */}
        <h1>Software Division</h1>
        <h1>Mechanical Division</h1>
        <h1>Electrical Division</h1>
        <h1>Business Division</h1>
      </div>
    </Layout>
  );
}
