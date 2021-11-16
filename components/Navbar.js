import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { AppBar, Toolbar, CssBaseline } from "@material-ui/core";

export default function Navbar() {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Link href="/">WATonomous Logo Here</Link>
        <div className={styles.navbar}>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/sponsors">Sponsors</Link>
          <Link href="/events">Events</Link>
          <Link href="/getinvolved">Get Involved</Link>
          <Link href="/newsroom">Newsroom</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
