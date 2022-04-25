import * as React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import HeaderCard from "./HeaderCard";
import * as styles from "./Layout.module.scss";
export default function Layout(props) {
  const hasCustom = props.customLayout ? "" : styles.layout;
  return (
    <div>
      <Navbar />
      {
        props.heading && 
        <HeaderCard
        quote = {props.heading.quote}
        header = {props.heading.header}
        description = {props.heading.description}
        />
      }
      <div className={hasCustom}>{props.children}</div>
      <Footer />
    </div>
  );
}
