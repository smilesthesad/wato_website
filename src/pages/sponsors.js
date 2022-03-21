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
        <div className={styles.sponsors}>
          <h2 className={styles.blueHeading}>Our Current Sponsors</h2>
          <p style={{ textAlign: "center" }}>
            A huge thank you to everyone who supports our design team and our
            mission!
          </p>
          <h3 style={{ textAlign: "center" }}>Current Partners</h3>
          <div className={styles.tier}>
          <StaticImage src="../images/logo_gm.png" width={300} />
          </div>
          <h3>Current Sponsors</h3>
          <h4>Diamond Tier</h4>
          <div className={styles.tier}>
          <StaticImage src="../images/logo_mef.png" width={300} />
          <StaticImage src="../images/logo_lumentum.png" width={300} />
          </div>
          {/* Lumentum, MEF */}
          <h4>Platinum Tier</h4>
          <div className={styles.tier}>
          {/* Applanix is now part of Trimble */}
          <StaticImage src="../images/logo_trimble.png" width={300} />
          </div>
          <h4>Gold Tier</h4>
          <div className={styles.tier}>
          {/* Vector, WEEF */}
          <StaticImage src="../images/logo_weef.png" width={300} />
          </div>
          <h4>Silver Tier</h4>
          <div className={styles.tier}>
          {/* MSD Machine Tool */}
          </div>
          <h4>Bronze Tier</h4>
          <div className={styles.tier}>
          <StaticImage src="../images/logo_engsoc.png" width={300} />
          {/* waterloo engineering */}
          </div>
          <h4>In-Kind Sponsors</h4>
          <div className={styles.tier}>
          <StaticImage src="../images/logo_1password.png" width={300} />
          <StaticImage src="../images/logo_teleport.webp" width={300} />

          </div>
          {/* 1Password, Teleport */}
        </div>
      </div>
    </Layout>
  );
}
