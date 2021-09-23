import React from 'react'
import {useState, useEffect} from 'react';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter';
import PhoneIcon from '@material-ui/icons/Phone';
import {makeStyles, createTheme} from '@material-ui/core/styles'

const styles = makeStyles({
    footerColor:{
      width: '100%',
      background: "#92b787",
      color: "#fff"
    },
})
export default function Footer() {
    const classes = styles()

    const [value, setValue] = useState(false)
    return (
        //use the BottomNavigation to write markup for the footer
        //icons located in the footer
        //showLables is set to true by default to show labels
        <div>
            <BottomNavigation
                className= {classes.footerColor}
                value = {value}
                //showLabels
                onChange = {(event, newValue) => setValue(newValue)}
            >
                <BottomNavigationAction label="Instagram" value="explore" icon={<InstagramIcon style={{fill: "#C13584"}}/>} />
                <BottomNavigationAction label="Facebook" value="recents" icon={<FacebookIcon style={{fill: "#3b5998"}}/>} />
                <BottomNavigationAction label="Twitter" value="favorites" icon={<TwitterIcon  style={{fill: "#1DA1F2"}}/>} />
                <BottomNavigationAction label="Phone" value="home" icon={<PhoneIcon style={{fill: "#696969"}}/>} />
            </BottomNavigation>
        </div>
        
    )
}

