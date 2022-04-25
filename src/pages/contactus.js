import React from "react";
import Layout from "../components/Layout";
import {Typography, Stack, Grid} from "@mui/material"
import ContactInfo from "../components/ContactInfo";
import Form from "../components/Form";
import GreyButton from "../components/GreyButton";
import * as style from "./contactus.module.scss";


//N.B. embedURL is generated by finding the location on Google Maps in a browser,
//  then pressing the "Share" button followed by "Embed a map", and copying the generated URL
const WATOlocation = {
  embedURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.4312835898595!2d-80.54075716183713!3d43.47246910021977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4011c244c4f%3A0xb10643898bf7c87!2sEngineering%205%2C%20200%20University%20Ave%20W%2C%20Waterloo%2C%20ON%20N2L%203E9!5e0!3m2!1sen!2sca!4v1647544533537!5m2!1sen!2sca",
  width: "600",
  height: "450"
};

export default function contactus() {
  return (
    <Layout>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12}>
          <Typography variant="h2"><b>Contact Us!</b></Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h4">
            Feel free to reach out to us on any of these platforms! You can contact
            us at info@watonomous.ca or simply fill out the form below with your
            message.
          </Typography>
        </Grid>

        <Grid item xs={4}>


          <div style={{textAlign: "center"}}>
            <Stack spacing={2}>
              <div className={style.blueContacts}>
                <ContactInfo justifyContent="center"/>
              </div>
              <GreyButton>
                Sponsorship Form
              </GreyButton>
              <GreyButton>
                Join our Mailing List
              </GreyButton>
              <GreyButton>
                Join our Team
              </GreyButton>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={8}>
          <Form
            fields={[
              {label: "First Name", xs: 6},
              {label: "Last Name", xs: 6},
              {label: "Email", xs: 6},
              {label: "Phone Number", xs: 6},
              {label: "Message", xs: 12, multiline: true, rows: 2}
            ]}
            submitLabel="Submit"
          />
        </Grid>

        <Grid item xs={12}>
          <h2>Our Mailing List</h2> 
        </Grid>

        <Grid item xs={4}>
          <p>
            Join our mailing list to receive updates about upcoming events, opportunities, and news about WATonomous!
          </p>
        </Grid>
        <Grid item xs={8}>
          <Form
            fields={[
              {label: "First Name", xs: 6},
              {label: "Last Name", xs: 6},
              {label: "Email", xs: 12}
            ]}
            submitLabel="Subscribe"
          />
        </Grid>

        <Grid item xs={12}>
          <h2>Address</h2> 
        </Grid>

        <Grid item xs={12}>
          <p>WATonomous is a University of Waterloo student-run autonomous car team and is located at the Engineering 5 building in the Sedra design centre.</p>
        </Grid>
        
        <Grid item xs={7}>
          <iframe
            src={WATOlocation.embedURL}
            title="WATonomous Location"
            width="100%"
            height={WATOlocation.height}
            loading="lazy"
          />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h6">
            University of Waterloo<br/>
            Engineering 5<br/>
            200 University Ave W<br/>
            Waterloo, ON<br/>
            N2L 3G1 Canada<br/>
          </Typography>
        </Grid>
      </Grid>
      <br/>
    </Layout>
  );
}
