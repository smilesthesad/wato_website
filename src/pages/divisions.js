import React from "react";
import Layout from "../components/Layout";
import BigBlueBox from "../components/BigBlueBox";
import * as styles from "./divisions.module.scss";
import { Typography } from "@mui/material";
import { FaCode, FaBolt, FaSuitcase, FaWrench } from "react-icons/fa";
export default function divisions() {
  return (
    <Layout>
      <div>
        <div className={styles.divHeader}>
          <Typography variant="h3">
            <b>Divisions</b>
          </Typography>
          <Typography variant="h6">
            Core members will be placed in groups based on their skills,
            experience, and interests.
            <br />
            All meetings are held remotely but WATonomous is operating both in
            -person and remote this Fall 2021. We will still have limited
            physical access to our vehicle for testing and development if
            required.
          </Typography>
        </div>
        <div className="division">
          <Typography variant="h3" className={styles.iconText}>
            <FaCode /> &nbsp; <b>Software</b>
          </Typography>
          <BigBlueBox title="Perception">
            ​The Perception Group is responsible for processing camera, LIDAR
            and radar sensor data to identify objects of interest (eg. road
            lines, traffic signals/signs, obstacles etc). Members will research
            and develop object detection and classification algorithms,
            experiment with existing open-source libraries, and work with other
            teams to integrate the Perception module into the software system.
            Members will gain experience working with machine learning, computer
            vision, point cloud data processing, system integration, ROS,
            OpenCV, C++, and Python. They have three current goals:
          </BigBlueBox>
          <BigBlueBox title="Path Planning">
            Nisi dolor officia dolore elit fugiat tempor reprehenderit veniam.
            Cupidatat ex commodo velit esse duis reprehenderit elit. Sunt
            cupidatat consectetur est voluptate ipsum veniam veniam. Anim dolor
            magna veniam nulla exercitation nulla qui laboris sint. Aliquip aute
            sit elit ipsum mollit excepteur et cupidatat est dolore aute id.
          </BigBlueBox>
          <BigBlueBox title="Infrastructure & Simulation">
            Ullamco cupidatat amet Lorem nisi. Aliquip aliqua laboris in velit
            velit incididunt ea culpa consequat ea ipsum laborum. Ullamco fugiat
            et non labore pariatur aliquip pariatur irure et. Fugiat laboris
            consequat ex fugiat quis proident commodo. Magna laborum do fugiat
            aute do mollit laborum consectetur consequat excepteur mollit
            commodo. Exercitation officia culpa labore est dolor pariatur nulla
            esse mollit voluptate officia ad.
          </BigBlueBox>
        </div>
        <div className="division">
          <Typography variant="h3" className={styles.iconText}>
            <FaBolt /> &nbsp; <b>Electrical</b>
          </Typography>
          <BigBlueBox title="Perception">
            Incididunt dolor aute magna ut id. Commodo fugiat commodo ea dolore
            non exercitation ipsum anim magna do labore. Anim dolor
            reprehenderit sit id occaecat. Eu quis consequat commodo dolor
            deserunt irure sint dolore. Est ipsum commodo anim minim dolor ea
            proident.
          </BigBlueBox>
          <BigBlueBox title="Path Planning">
            Nisi dolor officia dolore elit fugiat tempor reprehenderit veniam.
            Cupidatat ex commodo velit esse duis reprehenderit elit. Sunt
            cupidatat consectetur est voluptate ipsum veniam veniam. Anim dolor
            magna veniam nulla exercitation nulla qui laboris sint. Aliquip aute
            sit elit ipsum mollit excepteur et cupidatat est dolore aute id.
          </BigBlueBox>
          <BigBlueBox title="Infrastructure & Simulation">
            Ullamco cupidatat amet Lorem nisi. Aliquip aliqua laboris in velit
            velit incididunt ea culpa consequat ea ipsum laborum. Ullamco fugiat
            et non labore pariatur aliquip pariatur irure et. Fugiat laboris
            consequat ex fugiat quis proident commodo. Magna laborum do fugiat
            aute do mollit laborum consectetur consequat excepteur mollit
            commodo. Exercitation officia culpa labore est dolor pariatur nulla
            esse mollit voluptate officia ad.
          </BigBlueBox>
        </div>
        <div className="division">
          <Typography variant="h3" className={styles.iconText}>
            <FaWrench /> &nbsp; <b>Mechanical</b>
          </Typography>
          <BigBlueBox title="Perception">
            Incididunt dolor aute magna ut id. Commodo fugiat commodo ea dolore
            non exercitation ipsum anim magna do labore. Anim dolor
            reprehenderit sit id occaecat. Eu quis consequat commodo dolor
            deserunt irure sint dolore. Est ipsum commodo anim minim dolor ea
            proident.
          </BigBlueBox>
          <BigBlueBox title="Path Planning">
            Nisi dolor officia dolore elit fugiat tempor reprehenderit veniam.
            Cupidatat ex commodo velit esse duis reprehenderit elit. Sunt
            cupidatat consectetur est voluptate ipsum veniam veniam. Anim dolor
            magna veniam nulla exercitation nulla qui laboris sint. Aliquip aute
            sit elit ipsum mollit excepteur et cupidatat est dolore aute id.
          </BigBlueBox>
          <BigBlueBox title="Infrastructure & Simulation">
            Ullamco cupidatat amet Lorem nisi. Aliquip aliqua laboris in velit
            velit incididunt ea culpa consequat ea ipsum laborum. Ullamco fugiat
            et non labore pariatur aliquip pariatur irure et. Fugiat laboris
            consequat ex fugiat quis proident commodo. Magna laborum do fugiat
            aute do mollit laborum consectetur consequat excepteur mollit
            commodo. Exercitation officia culpa labore est dolor pariatur nulla
            esse mollit voluptate officia ad.
          </BigBlueBox>
        </div>
        <div className="division">
          <Typography variant="h3" className={styles.iconText}>
            <FaSuitcase /> &nbsp; <b>Business</b>
          </Typography>
          <BigBlueBox title="Perception">
            Incididunt dolor aute magna ut id. Commodo fugiat commodo ea dolore
            non exercitation ipsum anim magna do labore. Anim dolor
            reprehenderit sit id occaecat. Eu quis consequat commodo dolor
            deserunt irure sint dolore. Est ipsum commodo anim minim dolor ea
            proident.
          </BigBlueBox>
          <BigBlueBox title="Path Planning">
            Nisi dolor officia dolore elit fugiat tempor reprehenderit veniam.
            Cupidatat ex commodo velit esse duis reprehenderit elit. Sunt
            cupidatat consectetur est voluptate ipsum veniam veniam. Anim dolor
            magna veniam nulla exercitation nulla qui laboris sint. Aliquip aute
            sit elit ipsum mollit excepteur et cupidatat est dolore aute id.
          </BigBlueBox>
          <BigBlueBox title="Infrastructure & Simulation">
            Ullamco cupidatat amet Lorem nisi. Aliquip aliqua laboris in velit
            velit incididunt ea culpa consequat ea ipsum laborum. Ullamco fugiat
            et non labore pariatur aliquip pariatur irure et. Fugiat laboris
            consequat ex fugiat quis proident commodo. Magna laborum do fugiat
            aute do mollit laborum consectetur consequat excepteur mollit
            commodo. Exercitation officia culpa labore est dolor pariatur nulla
            esse mollit voluptate officia ad.
          </BigBlueBox>
        </div>
      </div>
    </Layout>
  );
}
