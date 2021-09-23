import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login'
import SignUp from './SignUp'
import './Form.css'

export const FormLogin = () => {
    //Success state
    /*const [isSubmitted,setIsSubmitted] = useState(false)

    function submitForm () {
        setIsSubmitted(true);
    }*/
    return (
        <>
            <div className="form-container">
                <span className="close-btn"></span>
                <Router>
                    <div className="form-content-left">
                        <img src="images/content-left.png" alt="leaf-left" className="form-leaf-img"/>
                    </div>
                    {/*<div className="form-content-right">*/}
                        {/*Using the exact path would only render the path that has been defined*/}
                    
                    {/*Behaves like a switch statement renders the first route that matches the path*/}
                    
                    <Switch>
                        <Route exact path="/SignIn" render={() => (   
                            <Login />
                        )}/>
                        <Route exact path="/SignUp" render={() => ( 
                            <SignUp />
                        )}/>
                    </Switch>
                    
                    {/*<Route exact path='/' component={Home}/>*/}
                    {/*</div>*/}

                </Router>
                
                {/*if is not submitted is true*/}
                {/*{!isSubmitted ? (
                    <SignUp submitForm= {submitForm} /> 
                
                ) : (<Success />)

                }*/}
            </div>
        </>
    )
}

export default FormLogin;