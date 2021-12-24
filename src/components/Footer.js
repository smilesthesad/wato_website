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
        <Grid item xs={12} sm={5} md={3} className={styles.contact}>
          <h1>Contact Us</h1>
          <h3>info@watonomous.ca</h3>
          <h3>200 University, University of Waterloo, ON</h3>
          <Grid
            container
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item>
              <a href="https://twitter.com/watonomous/" className={styles.icon}>
                <SvgIcon component={TwitterIcon} color="action" />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.instagram.com/watonomous/" className={styles.icon}>
                <SvgIcon component={InstagramIcon} color="action" />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.facebook.com/WATonomous/" className={styles.icon}>
                <SvgIcon component={FacebookIcon} color="action" />
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5} md={3}>
          <h1>Sponsors</h1>
          <h1>About us</h1>
          <h3>Major Accomplishments</h3>
          <h3>Timeline</h3>
        </Grid>
        <Grid item xs={12} sm={5} md={3}>
          <h1>Team</h1>
          <h3>Team Structure</h3>
          <h3>Role Details</h3>
          <h3>Resources</h3>
          <h3>Apply</h3>
        </Grid>
        <Grid item xs={12} sm={5} md={3}>
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
