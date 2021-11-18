import Grid from "@mui/material/Grid";
import React from "react";
import BlueButton from "../components/BlueButton";
import Layout from "../components/Layout";
import * as styles from "./Home.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
export default function Home() {
  return (
    <div>
      <Helmet>
        <title>WATonomous Website</title>
        <meta
          name="keywords"
          content="watonomous, autonomous vehicles, vehicles, autonomy, waterloo, student design team"
        ></meta>
      </Helmet>
      <Layout>
        <main className={styles.main}>
          <div className={styles.head}>
            <StaticImage
              src="../images/back_view_of_vehicle.jpg"
              className={styles.backOfBolty}
            />
            <StaticImage src="../images/WATOLogo.svg" width={1200} />
            <h1 className={styles.description}>
              University of Waterloo's Autonomous Vehicle Design Team
            </h1>
            <div>
              <BlueButton href="/about">Learn More</BlueButton>
              <BlueButton href="/">Become a Sponsor</BlueButton>
            </div>
          </div>
          <div className={styles.infoGrid}>
            <Grid
              container
              rowSpacing={{ xs: 2, sm: 3, md: 10 }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item md={6}>
                <h1 className={styles.headerText}>Our Mission</h1>
                <h2 className={styles.textDescription}>
                  Adipisicing do et consequat fugiat qui sint dolor sint nostrud
                  do consequat fugiat. Adipisicing sint occaecat tempor laboris
                  amet mollit officia pariatur fugiat et amet qui veniam sunt.
                  Eu quis quis incididunt veniam ad excepteur nisi veniam anim
                  nostrud.
                </h2>
                <BlueButton href="/about">Learn More</BlueButton>
              </Grid>
              <Grid item md={6} style={{ textAlign: "center" }}>
                <StaticImage
                  src="../images/side_view_of_vehicle.jpeg"
                  className={styles.sideViewOfBolty}
                  width={350}
                  // height={250}
                />
              </Grid>
              <Grid item md={6} style={{ textAlign: "center" }}>
                <div>
                  <StaticImage
                    src="../images/WATORACE_LOGO.svg"
                    // className={styles.backOfBolty}
                    height={200}
                  />
                </div>
              </Grid>
              <Grid item md={6} style={{ textAlign: "right" }}>
                <div>
                  <h1 className={styles.headerText}>Partnerships</h1>
                  <h2 className={styles.textDescription}>
                    Excepteur dolor mollit fugiat mollit aliqua aute ut dolore
                    occaecat aliqua labore dolore. Irure ut aliquip aliquip
                    dolore labore et fugiat.Velit laborum voluptate
                    reprehenderit consectetur.
                  </h2>
                </div>
              </Grid>
            </Grid>
          </div>
        </main>
      </Layout>
    </div>
  );
}
