import React from "react";
import BigBlueBox from "../components/BigBlueBox";
import BlueButton from "../components/BlueButton";
import Layout from "../components/Layout";

export default function joinus() {
  return (
    <Layout>
      <div>
        <h1>Join our Team!</h1>
        <p>
          Winter 2022 applications are now open. You will need to complete and
          submit your resume at the form below. If we think you’ll be a good fit
          for the role, we’ll reach out to schedule a quick chat to get to know
          you better
        </p>
        <p>
          <b>
            Applications close December 7th, 2021, 11:59PM EST. You can expect
            to hear back from us by December 23rd, 2021, 11:59PM EST.
          </b>
          If you have any specific inquiries, the direct contacts for each role
          is listed below.
        </p>
        <BigBlueBox title="Important">
          By joining WATonomous, you are agreeing to become a member of the team
          for the entire Fall Term. All applicants must check out
          https://bit.ly/wato-roles-divisions-info for detailed descriptions of
          the Fall 2021 roles before applying. For a list of helpful resources
          and technical material we are looking for in candidates, see our
          Resources.
        </BigBlueBox>
        <BlueButton>Submit your application!</BlueButton>
        <h1>Divisions Open for Recruitment</h1>
        <h1 className="boldBlue">Software Division</h1>
        <p>
          Perception - Anita Hu: cq2hu@watonomous.ca <br />
          Path Planning - Rowan Dempster: r2dempst@watonomous.ca <br />
          Infrastructure & Simulation​ + OpenBolty - Stephen Wang:
          xiren.wang@watonomous.ca
        </p>
        <h1 className="boldBlue">Mechanical Division</h1>
        <p>
          Sensor Mounting <br />
          Infrastructure & Compute Rack
        </p>
        <h1 className="boldBlue">Electrical Division</h1>
        <p>
          Power Systems Advisor​ Sensor Interfacing - Chris
          Santos:c7santos@uwaterloo.ca
          <br />
          RADAR Clustering & Tracking - Cyrus Gandevia: cgandevi@uwaterloo.ca
        </p>
        <h1 className="boldBlue">Business Division</h1>
        <p>
          Sponsorship & Outreach - Victor Zheng: v2zheng@watonomous.ca <br />
          Marketing - Victor Zheng: v2zheng@watonomous.ca <br />
          Graphic Design - Roni Wu:yy8wu@watonomous.ca
        </p>
      </div>
    </Layout>
  );
}
