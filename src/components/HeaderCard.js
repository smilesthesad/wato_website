import { Typography } from '@mui/material'
import React from 'react'
import * as styles from "./HeaderCard.module.scss"
import BlueButton from './BlueButton'
import { StaticImage } from 'gatsby-plugin-image'
export default function HeaderCard(props) {
  return (
    <div className={styles.head}>
        <StaticImage
            src="../images/back_view_of_vehicle.jpg"
            className={styles.backgroundBolty}
            />
        <div style={{"width": "50%"}}>
        {
            props.quote && (
                <>
            <Typography variant="h5">"{props.quote}"</Typography>
            <hr className={styles.blueline} />
            </>)
        }
        
        <Typography variant="h3"><b>{props.header}</b></Typography>
        <Typography variant="h5" style={{"marginBottom": "4vw"}}>
            {props.description}
        </Typography>
            <BlueButton href="/about">Learn More</BlueButton>
        </div>
    </div>
  )
}
