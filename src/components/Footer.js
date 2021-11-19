import React from "react";
import Grid from "@mui/material/Grid";
import * as styles from "./Footer.module.scss";
import SvgIcon from "@mui/material/SvgIcon";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  // TODO: Switch to links
  return (
    <div>
      <Grid
        className={styles.footer}
        container
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        justifyContent="center"
      >
        <Grid
          item
          xs={1}
          md={2}
          className={styles.contact}
          justifyContent="center"
        >
          <h1>Contact Us</h1>
          <h3>info@watonomous.ca</h3>
          <h3>200 University, University of Waterloo, ON</h3>
          {/* media buttons here */}
          {/* <SvgIcon>{TwitterIcon}</SvgIcon> */}
        </Grid>
        <Grid item xs={1} md={3}>
          <h1>Sponsors</h1>
          <h1>About us</h1>
          <h3>Major Accomplishments</h3>
          <h3>Timeline</h3>
        </Grid>
        <Grid item xs={1} md={3}>
          <h1>Team</h1>
          <h3>Team Structure</h3>
          <h3>Role Details</h3>
          <h3>Resources</h3>
          <h3>Apply</h3>
        </Grid>
        <Grid item xs={1} md={3}>
          <h1>Media</h1>
          <h3>Photo Gallery</h3>
          <h3>News Coverage</h3>
          <h3>Tech Talks</h3>
        </Grid>
      </Grid>
      Created by WATonomous
    </div>
  );
}
