import React from 'react'
import Home from './Home'
import App from './App'
import Navbar from './components/Nav'
import About from './pages/About'
import Form from './Form'
import Shop from './pages/Shop'
import Collection from './pages/Collection'

import './Main.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Main() {
    return (
        <div className="home-container">
            <Router>
                <Switch> 
                    <Route exact path="/" render={()=>(
                        <Home />
                    )}/>
                    <Route exact path="/about" render={() => (
                        <About />
                    )} />
                    <Route exact path="/shop" render={() => (
                        <Shop />
                    )} />
                    <Route exact path="/collection" render= {()=>(
                        <Collection />
                    )} />
                    {/*<Route path = "/about" exact component = {About} />*/}
                    <Route exact path="/SignUp" render={()=> (
                        <App />
                    )}/>
                    <Route exact path="/SignIn" render={()=>(
                        <Form />
                    )} />
                    
                </Switch>   
                
            </Router>
        </div>
    )
}

