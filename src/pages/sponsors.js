import { StaticImage } from "gatsby-plugin-image";
import { Typography } from "@mui/material";
import React from "react";
import BlueButton from "../components/BlueButton";
import Layout from "../components/Layout";
import * as styles from "./sponsors.module.scss";
export default function Sponsors() {
  return (
    <Layout customLayout={true}>
      <div className={styles.sponsors}>
        <div className={styles.sponsorHeader}>
          <Typography variant="h2">
            <b>
            Sponsors
            </b>
          </Typography>
          <Typography variant="h5">
          Autonomous vehicles are the future. WATonomous is passionate about
            their work in achieving this vision. As WATonomous grows, it
            requires a significant investment into software and hardware. With
            your support, we can heighten our vehicle’s performance and gain
            access to more competition opportunities.
          </Typography>
        </div>
        <Typography variant="h4" className={styles.blueHeading}>
          <b>
            Why WATO?
          </b>
        </Typography>
        <div className={styles.centerImage}>
          <StaticImage src="../images/team_with_bolty.png" width={700} />
        </div>
        <Typography variant="h5">
          We are a team of bright individuals with outstanding competition
          results to show for it (list results).
          <br/>
          We are expanding our horizons, currently in works of publishing
          multiple research reports and Tech Talks.
        </Typography>
        <div className={`${styles.blueHeading} ${styles.joinUs}`}>
          <Typography variant="h4">
            <b>Join Us Today!</b>
          </Typography>
          <div className={styles.sponsorHeader}>
            <BlueButton>Complete Sponsor Form</BlueButton>
          </div>
        </div>
        <Typography variant="h5">
          For more details, our sponsorship package can be accessed here. For
          any inquirires, feel free to contact us.
        </Typography>
        <div className={styles.centerImage}>
          <StaticImage src="../images/sponsorpackage.png" width={700} />
        </div>
        <div className={styles.sponsors}>
        <div className={styles.blueHeading}>
          <Typography variant="h4">
            <b>Our Current Sponsors</b>
          </Typography>
        </div>
          <Typography variant="h5" style={{ textAlign: "center" }}>
            A huge thank you to everyone who supports our design team and our
            mission
          </Typography>
          <Typography variant="h4" className={styles.tier}>
          <b>Current Partners</b>
          </Typography>
          <div className={styles.sponsorLogo}>
          <StaticImage src="../images/logo_gm.png" width={300} />
          </div>
          <Typography variant="h4" className={styles.tier}>
          <b>Current Sponsors</b>
          </Typography>
          <Typography variant="h5" className={styles.tier}>
          Diamond Tier
          </Typography>
          <div className={styles.sponsorLogo}>
          <StaticImage src="../images/logo_mef.png" width={300} />
          <StaticImage src="../images/logo_lumentum.png" width={300} />
          </div>
          {/* Lumentum, MEF */}
          <Typography variant="h5" className={styles.tier}>
          Platinum Tier
          </Typography>
          <div className={styles.sponsorLogo}>
          {/* Applanix is now part of Trimble */}
          <StaticImage src="../images/logo_trimble.png" width={300} />
          </div>
          <Typography variant="h5" className={styles.tier}>
          Gold Tier
          </Typography>
          <div className={styles.sponsorLogo}>
          {/* Vector, WEEF */}
          <StaticImage src="../images/logo_weef.png" width={300} />
          </div>
          <Typography variant="h5" className={styles.tier}>
          Silver Tier
          </Typography>
          <div className={styles.sponsorLogo}>
          {/* MSD Machine Tool */}
          </div>
          <Typography variant="h5" className={styles.tier}>
          Bronze Tier
          </Typography>
          <div className={styles.sponsorLogo}>
          <StaticImage src="../images/logo_engsoc.png" width={300} />
          {/* waterloo engineering */}
          </div>
          <Typography variant="h5" className={styles.tier}>
          In-Kind Sponsors
          </Typography>
          <div className={styles.sponsorLogo} style={{"paddingBottom": "2vw"}}>
          <StaticImage src="../images/logo_1password.png" width={300} />
          <StaticImage src="../images/logo_teleport.webp" width={300} />
          {/* 1Password, Teleport */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
