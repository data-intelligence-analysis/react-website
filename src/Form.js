import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp'
import Login from './Login'
import Success from'./Success'

import './Form.css'

export const Form = () => {
    const [isSubmitted,setIsSubmitted] = useState(false)

    function submitForm () {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className="form-container">
                 
                <span className="close-btn"></span>
                <Router>
                    <div className="formc-content-left">
                        <img src="images/content-left.png" alt="leaf-left" className="form-leaf-img"/>
                    </div>
                    <div className="form-content-right">
                        {/*Using the exact path would only render the path that has been defined*/}
                        <Route exact path="/" render={() => (   
                            <SignUp />
                        )}/>
                        {/*Behaves like a switch statement renders the first route that matches the path*/}
                        <Switch>
                            <Route exact path="/Login">
                                <Login />
                            </Route>
                        </Switch>
                        {/*<Route exact path='/' component={Home}/>*/}
                        
                    </div>

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

export default Form;