import * as React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import * as styles from "./Layout.module.scss";
export default function Layout(props) {
  return (
    <div>
      <Navbar />
      <div className={styles.layout}>{props.children}</div>
      <Footer />
    </div>
  );
}
