import { Grid, Typography } from "@mui/material";
import React from "react";
import BlueButton from "../components/BlueButton";
import Layout from "../components/Layout";
import * as styles from "./index.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import ResearchProject from "../components/ResearchProject";
import BackViewofVehicle from "../images/back_view_of_vehicle.jpg";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  typography: {
    fontSize: 16
  }
})
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Helmet>
        <title>WATonomous</title>
        <meta
          name="keywords"
          content="watonomous, autonomous vehicles, vehicles, autonomy, waterloo, student design team"
          ></meta>
      </Helmet>
      <Layout customLayout={true}>
        <main>
          <div className={styles.head}>
            <StaticImage
              src="../images/back_view_of_vehicle.jpg"
              className={styles.backgroundBolty}
              />
            <StaticImage src="../images/WATOLogo.webp" width={1000} />
            <Typography variant="h3" className={styles.description}>
              <b>
              University of Waterloo's Autonomous Vehicle Design Team
              </b>
            </Typography>
            <div className={styles.infoButtons}>
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
                <Typography variant="h2" className={styles.headerText}>
                  <b>
                    Our Mission
                    </b>
                </Typography>
                <Typography variant="h4" className={styles.textDescription} style={{"marginBottom": "2vw"}}>
                Adipisicing do et consequat fugiat qui sint dolor sint nostrud
                  do consequat fugiat. Adipisicing sint occaecat tempor laboris
                  amet mollit officia pariatur fugiat et amet qui veniam sunt.
                  Eu quis quis incididunt veniam ad excepteur nisi veniam anim
                  nostrud.
                </Typography>
                <BlueButton href="/about">Learn More</BlueButton>
              </Grid>
              <Grid item md={6} style={{ textAlign: "center" }}>
                <StaticImage
                  src="../images/side_view_of_vehicle.jpeg"
                  className={styles.sideViewOfBolty}
                  width={600}
                  />
              </Grid>
              <Grid item md={6} style={{ textAlign: "center" }}>
                <Grid container className={styles.watoPictures}>
                  <Grid md={6}>
                    <StaticImage
                      src="../images/WATORACE_LOGO.svg"
                      className={styles.infoGridPic}
                      height={200}
                      />
                  </Grid>
                  <Grid item md={6}>
                    <StaticImage
                      src="../images/iaccar.jpg"
                      className={styles.infoGridPic}
                      width={400}
                      />
                  </Grid>
                  <Grid md={6}>
                    <StaticImage
                      src="../images/mprwlogo.png"
                      className={styles.infoGridPic}
                      height={200}
                      />
                  </Grid>
                  <Grid md={6}>
                    <StaticImage
                      src="../images/mprwcar.jpg"
                      className={styles.infoGridPic}
                      width={400}
                      />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={6} style={{ textAlign: "right" }}>
                <div>
                  <Typography variant="h2" className={styles.headerText}>
                  <b>Partnerships</b>
                  </Typography>
                  <Typography variant="h6" className={styles.textDescription}>
                  Excepteur dolor mollit fugiat mollit aliqua aute ut dolore
                    occaecat aliqua labore dolore. Irure ut aliquip aliquip
                    dolore labore et fugiat.Velit laborum voluptate
                    reprehenderit consectetur.
                </Typography>
                  <h2 className={styles.textDescription}>
                   
                  </h2>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={styles.researchPapers}>
            <div>
              <Typography variant="h2">
                <b>
                Research Papers
                </b>
              </Typography>
              <Typography variant="h6" style={{"marginBottom": "2vw"}}>
                We are currently in the process of developing multiple research
                projects. They are all ongoing and will be ready by early fall.
                Check out the topics here!
              </Typography>
            </div>

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              justifyContent="center"
              >
              <Grid md={2.8}>
                <ResearchProject
                  title="Environment Modeling"
                  text="Lorem ipsum aliqua cupidatat cillum laborum sunt enim labore cupidatat. Est est laboris excepteur aute officia veniam voluptate. Culpa quis sint ex aliquip id non. Elit ut ut sint ullamco eiusmod in fugiat non est enim ex. Incididunt dolor magna laborum anim cupidatat in esse amet id id elit labore commodo. Laboris mollit enim amet excepteur incididunt laboris duis est enim proident ad deserunt magna duis."
                  image={BackViewofVehicle}
                  ></ResearchProject>
              </Grid>
              <Grid md={2.8}>
                <ResearchProject
                  title="Environment Modeling"
                  text="Lorem ipsum aliqua cupidatat cillum laborum sunt enim labore cupidatat. Est est laboris excepteur aute officia veniam voluptate. Culpa quis sint ex aliquip id non. Elit ut ut sint ullamco eiusmod in fugiat non est enim ex. Incididunt dolor magna laborum anim cupidatat in esse amet id id elit labore commodo. Laboris mollit enim amet excepteur incididunt laboris duis est enim proident ad deserunt magna duis."
                  image={BackViewofVehicle}
                  ></ResearchProject>
              </Grid>
              <Grid md={2.8}>
                <ResearchProject
                  title="Environment Modeling"
                  text="Lorem ipsum aliqua cupidatat cillum laborum sunt enim labore cupidatat. Est est laboris excepteur aute officia veniam voluptate. Culpa quis sint ex aliquip id non. Elit ut ut sint ullamco eiusmod in fugiat non est enim ex. Incididunt dolor magna laborum anim cupidatat in esse amet id id elit labore commodo. Laboris mollit enim amet excepteur incididunt laboris duis est enim proident ad deserunt magna duis."
                  image={BackViewofVehicle}
                  ></ResearchProject>
              </Grid>
              <Grid md={2.8}>
                <ResearchProject
                  title="Environment Modeling"
                  text="Lorem ipsum aliqua cupidatat cillum laborum sunt enim labore cupidatat. Est est laboris excepteur aute officia veniam voluptate. Culpa quis sint ex aliquip id non. Elit ut ut sint ullamco eiusmod in fugiat non est enim ex. Incididunt dolor magna laborum anim cupidatat in esse amet id id elit labore commodo. Laboris mollit enim amet excepteur incididunt laboris duis est enim proident ad deserunt magna duis."
                  image={BackViewofVehicle}
                  ></ResearchProject>
              </Grid>
            </Grid>
          </div>
        </main>
      </Layout>
    </div>
    </ThemeProvider>
  );
}
