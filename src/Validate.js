import { ErrorSharp } from '@material-ui/icons' 
import React from 'react'

//set values as a parameter
export default function Validate(values) {
    let errors = {}

    //FullName
    if (!values.fullname.trim()){
        errors.fullname = "Full name required";
    }

    //Email
    if (!values.email){
        errors.email = "Email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email ="Email address is invalid";
    }

    //Date of Birth
    if (!values.date_of_birth){
        errors.date_of_birth = "Date of birth is required";
    }

    //Password
    if(!values.password){
        errors.password = "Password is required";
    } else if (values.password.length < 8){
        errors.password = "Password requires a length of 8 or more characters"
    } //else if {<add more logic for later>}

    //Confirming Password

    if(!values.password_c){
        errors.password_c = "Confirmation password is required"
    } else if (values.passowrd!==values.password_c){
        errors.password_c = "Passwords do not match"
    }

    return errors;
}
