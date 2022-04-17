import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import * as styles from "./Footer.module.scss";
import ContactInfo from "./ContactInfo";

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
          <Typography variant="h4"><b>Contact Us</b></Typography>
          <Typography variant="h6">info@watonomous.ca</Typography>
          <Typography variant="h6">200 University, University of Waterloo, ON</Typography>
          <ContactInfo/>
        </Grid>
        <Grid item xs={12} sm={5} md={3}>
          <Typography variant="h4"><b>About us</b></Typography>
          <Typography variant="h4"><b>Sponsors</b></Typography>
          <Typography variant="h6">Major Accomplishments</Typography>
          <h3>Timeline</h3>
        </Grid>
        <Grid item xs={12} sm={5} md={3}>
          <Typography variant="h4"><b>Team</b></Typography>
          <Typography variant="h6">Team Structure</Typography>
          <Typography variant="h6">Role Details</Typography>
          <Typography variant="h6">Resources</Typography>
          <Typography variant="h6">Apply</Typography>
        </Grid>
        <Grid item xs={12} sm={5} md={3}>
          <Typography variant="h4"><b>Medi</b>a</Typography>
          <Typography variant="h6">Photo Gallery</Typography>
          <Typography variant="h6">News Coverage</Typography>
          <Typography variant="h6">Tech Talks</Typography>
        </Grid>
      </Grid>
      Created by WATonomous
    </div>
  );
}
