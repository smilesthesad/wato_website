import Head from "next/head";
import Grid from "@mui/material/Grid";
import BlueButton from "../components/BlueButton";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import backOfBolty from "../public/back_view_of_vehicle.jpg";
import sideViewOfBolty from "../public/side_view_of_vehicle.jpeg";
export default function Home() {
  return (
    <div>
      <Head key="title">
        <title>WATonomous Website</title>
        <meta
          name="keywords"
          content="watonomous, autonomous vehicles, vehicles, autonomy, waterloo, student design team"
        ></meta>
      </Head>
      <Layout>
        <main className={styles.main}>
          <div className={styles.head}>
            <h1>WATonomous</h1>
            <h1 className={styles.description}>
              University of Waterloo's Autonomous Vehicle Design Team
            </h1>
            <div>
              <BlueButton href="/about">Learn More</BlueButton>
              <BlueButton href="/">Become a Sponsor</BlueButton>
            </div>
            <Image
              src={backOfBolty}
              className={styles.backOfBolty}
              layout="fill"
            />
          </div>
          <div className={styles.infoGrid}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <h1>Our Mission</h1>
                <h2>Lorem Ipsum</h2>
                <BlueButton href="/about">Learn More</BlueButton>
              </Grid>
              <Grid item xs={6}>
                <Image src={sideViewOfBolty} />
              </Grid>
              <Grid item xs={6}>
                <h1>Partnerships</h1>
                <h2>Merge between WATonomous and WATORACE</h2>
              </Grid>
              <Grid item xs={6}>
                <h1>Partnerships</h1>
                <h2>Merge between WATonomous and WATORACE</h2>
              </Grid>
              {/* image here */}
            </Grid>
          </div>
        </main>
      </Layout>
    </div>
  );
}
