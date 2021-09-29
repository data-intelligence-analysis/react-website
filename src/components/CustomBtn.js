import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../Login'
const StyledButton = withStyles({
    root: {
        //normal css styling code
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 5, 
        background: "#7b4f2f",
        color: "#ebe9d6",
        transform: "translate(20px,0)",
        /*Second Nav*/
        marginRight: "5px",
        marginLeft: "2px",
        //boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#735240" //darker green
          },
    },
    label: {
      textTransform: 'capitalize',
    },
})(Button);

function CustomBtn(props) { //props - Think of functional components as functions
    //components of the function can be called from the App.js
    return (
        <StyledButton variants="contained" href="/SignIn">{props.txt}</StyledButton>
    )
}

export default CustomBtn