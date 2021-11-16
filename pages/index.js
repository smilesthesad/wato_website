import Head from "next/head";
import Link from "next/link";
import BlueButton from "../components/BlueButton";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";

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
          </div>
          <div className={styles.info}>
            <h1>Our Mission</h1>
            <h2>Lorem Ipsum</h2>
            <button className={styles.infoButton}>
              <h1>Learn More</h1>
            </button>
            {/* image here */}
            <h1>Partnerships</h1>
            <h2>Merge between WATonomous and WATORACE</h2>
          </div>
        </main>
      </Layout>
    </div>
  );
}
