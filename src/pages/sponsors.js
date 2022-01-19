import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import BlueButton from "../components/BlueButton";
import Layout from "../components/Layout";
import * as styles from "./sponsors.module.scss";
export default function Sponsors() {
  return (
    <Layout customLayout={true}>
      <div>
        <div className={styles.sponsorHeader}>
          <h1>Sponsors</h1>
          <p>
            Autonomous vehicles are the future. WATonomous is passionate about
            their work in achieving this vision. As WATonomous grows, it
            requires a significant investment into software and hardware. With
            your support, we can heighten our vehicle’s performance and gain
            access to more competition opportunities.
          </p>
        </div>
        <h2 className={styles.blueHeading}>Why WATO?</h2>
        <div className={styles.centerImage}>
          <StaticImage src="../images/team_with_bolty.png" width={700} />
        </div>
        <p>
          We are a team of bright individuals with outstanding competition
          results to show for it (list results).
        </p>
        <p>
          We are expanding our horizons, currently in works of publishing
          multiple research reports and Tech Talks.
        </p>
        <div className={`${styles.blueHeading} ${styles.joinUs}`}>
          <h1>Join Us Today!</h1>
          <div className={styles.sponsorHeader}>
            <BlueButton>Complete Sponsor Form</BlueButton>
          </div>
        </div>
        <p>
          For more details, our sponsorship package can be accessed here. For
          any inquirires, feel free to contact us.
        </p>
        <div className={styles.centerImage}>
          <StaticImage src="../images/sponsorpackage.png" width={700} />
        </div>
        <h2 className={styles.blueHeading}>Our Current Sponsors</h2>
        <p style={{ textAlign: "center" }}>
          A huge thank you to everyone who supports our design team and our
          mission!
        </p>
        <h3>Current Partner</h3>
      </div>
    </Layout>
  );
}
