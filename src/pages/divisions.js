import React from "react";
import Layout from "../components/Layout";
import DivisionBlueBox from "../components/DivisionBlueBox";
import * as styles from "./divisions.module.scss";
export default function divisions() {
  return (
    <Layout>
      <div>
        <div className={styles.divHeader}>
          <h1>Divisions</h1>
          <p>
            Core members will be placed in groups based on their skills,
            experience, and interests.
            <br />
            All meetings are held remotely but WATonomous is operating both in
            -person and remote this Fall 2021. We will still have limited
            physical access to our vehicle for testing and development if
            required.
          </p>
        </div>
        <DivisionBlueBox groupName="Perception">
          ​The Perception Group is responsible for processing camera, LIDAR and
          radar sensor data to identify objects of interest (eg. road lines,
          traffic signals/signs, obstacles etc). Members will research and
          develop object detection and classification algorithms, experiment
          with existing open-source libraries, and work with other teams to
          integrate the Perception module into the software system. Members will
          gain experience working with machine learning, computer vision, point
          cloud data processing, system integration, ROS, OpenCV, C++, and
          Python. They have three current goals:
        </DivisionBlueBox>
        <DivisionBlueBox groupName="Path Planning">
          Nisi dolor officia dolore elit fugiat tempor reprehenderit veniam.
          Cupidatat ex commodo velit esse duis reprehenderit elit. Sunt
          cupidatat consectetur est voluptate ipsum veniam veniam. Anim dolor
          magna veniam nulla exercitation nulla qui laboris sint. Aliquip aute
          sit elit ipsum mollit excepteur et cupidatat est dolore aute id.
        </DivisionBlueBox>
        <DivisionBlueBox groupName="Infrastructure & Simulation">
          Ullamco cupidatat amet Lorem nisi. Aliquip aliqua laboris in velit
          velit incididunt ea culpa consequat ea ipsum laborum. Ullamco fugiat
          et non labore pariatur aliquip pariatur irure et. Fugiat laboris
          consequat ex fugiat quis proident commodo. Magna laborum do fugiat
          aute do mollit laborum consectetur consequat excepteur mollit commodo.
          Exercitation officia culpa labore est dolor pariatur nulla esse mollit
          voluptate officia ad.
        </DivisionBlueBox>
      </div>
    </Layout>
  );
}
