import * as React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import * as styles from "./Layout.module.scss";
export default function Layout(props) {
  const hasCustom = props.customLayout ? "" : styles.layout;
  return (
    <div>
      <Navbar />
      <div className={hasCustom}>{props.children}</div>
      <Footer />
    </div>
  );
}
