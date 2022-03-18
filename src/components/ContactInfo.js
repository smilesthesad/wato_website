import * as styles from "./ContactInfo.module.scss";

import React from "react";
import Grid from "@mui/material/Grid";

import SvgIcon from "@mui/material/SvgIcon";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function ContactInfo(props) { 
    return (
        <Grid
            container
            justifyContent={props.justifyContent || "flex-start"}
            alignItems="center"
        >
            <Grid item>
            <a href="https://twitter.com/watonomous/" className={styles.icon}>
                <SvgIcon component={TwitterIcon} color="action" />
            </a>
            </Grid>
            <Grid item>
            <a href="https://www.instagram.com/watonomous/" className={styles.icon}>
                <SvgIcon component={InstagramIcon} color="action" />
            </a>
            </Grid>
            <Grid item>
            <a href="https://www.facebook.com/WATonomous/" className={styles.icon}>
                <SvgIcon component={FacebookIcon} color="action" />
            </a>
            </Grid>
        </Grid>
    );
}

export default ContactInfo;
