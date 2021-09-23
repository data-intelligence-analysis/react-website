import React from 'react'
import CustomBtn from './CustomBtn'
//Assetss
//import logo from '../logo.svg'
//import logoMobile from '../logoMobile.svg'
//---------
import pfp from '../images/home_logo.png';
import {Link} from 'react-router-dom';
import {Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles({
    bar:{
        paddingTop: "1rem",
        height: "60%",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "80%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#734520"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    
        }
    }
})




function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
                <Link to="/">
                    <img src = {pfp} className={classes.logo} height="150" />
                </Link> 
                <Typography variant="h6" className={classes.menuItem}>
                    About
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Shop
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Collection
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Rewards Club
                </Typography>
                <CustomBtn txt="Join Our Community"/>
            </Toolbar>
    )
}

export default NavBar;