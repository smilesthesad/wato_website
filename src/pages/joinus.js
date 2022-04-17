import { Typography } from "@mui/material";
import { Link } from "gatsby"
import * as styles from "./joinus.module.scss"
import React from "react";
import BigBlueBox from "../components/BigBlueBox";
import BlueButton from "../components/BlueButton";
import Layout from "../components/Layout";

export default function joinus() {
  return (
    <Layout>
      <div>
        <Typography variant="h2" style={{"marginBottom": "15px"}}> <b> Join our Team!</b></Typography>
        <Typography variant="h6">
          Winter 2022 applications are now open. You will need to complete and
          submit your resume at the form below. If we think you’ll be a good fit
          for the role, we’ll reach out to schedule a quick chat to get to know
          you better
          <br/> <br/>
          <b>
            Applications close December 7th, 2021, 11:59PM EST. You can expect
            to hear back from us by December 23rd, 2021, 11:59PM EST.
          </b>
          If you have any specific inquiries, the direct contacts for each role
          is listed below.
        </Typography>
        <BigBlueBox title="Important">
          By joining WATonomous, you are agreeing to become a member of the team
          for the entire Fall Term. 
          <br/><br/>
          All applicants must check out&nbsp;
          <a href="https://bit.ly/wato-roles-divisions-info">
            <b>
            https://bit.ly/wato-roles-divisions-info
            </b>
            </a> 
          &nbsp;for detailed descriptions of the Fall 2021 roles before applying. For a list of helpful resources
          and technical material we are looking for in candidates, see our&nbsp;
          <Link to="/resources"><b>Resources.</b></Link>
        </BigBlueBox>
        <div style={{"display": "flex", "justifyContent": "center", "paddingTop": "10px"}}>
        <BlueButton href="https://forms.gle/Y8sSsF2XEXTkPNhZ8">Submit your application!</BlueButton>
        </div>
        <Typography variant="h4" style={{"marginTop": "2vw"}}><b>Divisions Open for Recruitment</b></Typography>
        <Typography variant="h4" className={styles.boldBlue}><b>Software Division</b></Typography>
        <Typography variant="h6">
          Perception - Anita Hu: cq2hu@watonomous.ca <br />
          Path Planning - Rowan Dempster: r2dempst@watonomous.ca <br />
          Infrastructure & Simulation​ + OpenBolty - Stephen Wang:
          xiren.wang@watonomous.ca
        </Typography>
        <Typography variant="h4" className={styles.boldBlue}><b>Mechanical Division</b></Typography>
        <Typography variant="h6">
          Sensor Mounting <br />
          Infrastructure & Compute Rack
        </Typography>
        <Typography variant="h4" className={styles.boldBlue}><b>Electrical Division</b></Typography>
        <Typography variant="h6">
          Power Systems Advisor​ Sensor Interfacing - Chris
          Santos:c7santos@uwaterloo.ca
          <br />
          RADAR Clustering & Tracking - Cyrus Gandevia: cgandevi@uwaterloo.ca
        </Typography>
        <Typography variant="h4" className={styles.boldBlue}><b>Business Division</b></Typography>
        <Typography variant="h6">
          Sponsorship & Outreach - Victor Zheng: v2zheng@watonomous.ca <br />
          Marketing - Victor Zheng: v2zheng@watonomous.ca <br />
          Graphic Design - Roni Wu:yy8wu@watonomous.ca
        </Typography>
        <Typography variant="h4" style={{"marginTop": "2vw"}}><b>Applications for Affiliated Clubs</b></Typography>
        <Typography variant="h4" className={styles.boldBlue}><b>WATORACE</b></Typography>
        <Typography variant="h6">
          External Application:{" "}
          <a href="https://watorace.ca/apply"> Click Here! </a>
        </Typography>
      </div>
    </Layout>
  );
}
