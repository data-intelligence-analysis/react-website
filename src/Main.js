import React from 'react'
import Home from './Home'
import App from './App'
import FormLogin from './FormLogin'

import './Main.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Main() {
    return (
        <div className="home-container">
            <Router>
                <div className="Main">
                    <Switch> 
                        <Route exact path="/" render={()=>(
                            <Home />
                        )}/>
                        <Route exact path="/SignUp" render={()=> (
                            <App />
                        )}/>
                        <Route exact path="/SignIn" render={()=>(
                            <FormLogin />
                        )} />
                    </Switch>   
                </div>
            </Router>
        </div>
    )
}

