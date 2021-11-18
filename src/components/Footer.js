import React from "react";
import Grid from "@mui/material/Grid";
import * as styles from "./Footer.module.scss";
export default function Footer() {
  // Switch to links
  return (
    <div>
      <Grid
        className={styles.footer}
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        alignItems="center"
      >
        <Grid item md={3} className={styles.contact}>
          <h1>Contact Us</h1>
          <h2>info@watonomous.ca</h2>
          <h2>200 University, University of Waterloo, ON</h2>
          {/* media buttons here */}
        </Grid>
        <Grid item md={3}>
          <h1>Sponsors</h1>
          <h1>About us</h1>
          <h2>Major Accomplishments</h2>
          <h2>Timeline</h2>
        </Grid>
        <Grid item md={3}>
          <h1>Team</h1>
          <h2>Team Structure</h2>
          <h2>200 University, University of Waterloo, ON</h2>
          <h2>Resources</h2>
          <h2>Apply</h2>
        </Grid>
        <Grid item md={3}>
          <h1>Media</h1>
          <h2>Photo Gallery</h2>
          <h2>News Coverage</h2>
          <h2>Tech Talks</h2>
        </Grid>
      </Grid>
      Created by WATonomous
    </div>
  );
}
