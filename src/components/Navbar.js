import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./Navbar.module.scss";
import { AppBar, Toolbar, CssBaseline } from "@material-ui/core";

export default function Navbar() {
  return (
    <AppBar position="static" id={styles.appbar}>
      <CssBaseline />
      <Toolbar>
        <Link to="/">
          <StaticImage src="../images/WATOLogo.webp" width={200} />
        </Link>
        <div className={styles.navbar}>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/sponsors">Sponsors</Link>
          <Link to="/events">Events</Link>
          <Link to="/getinvolved">Get Involved</Link>
          <Link to="/newsroom">Newsroom</Link>
          <Link to="/" id={styles.contact}>
            Contact Us
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
