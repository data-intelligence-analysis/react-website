import React, {Component} from 'react'
import Logo from '../images/Concept-0.png';
import CustomBtn from './CustomBtn'
import {Nav, NavLink, Bars, Times, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import { NavMenuItems } from './NavMenuItems';

class Navbar extends Component {
    //Using useState in a simpilar version. You don't have to write the constructor class itself
    state = {selected: false}

    handleClick = () => {
        /*when navbar handleburger is clicked then selected is set to true and it changes to the cross and 
        then clicking the times icon reverts it back to the hamburger*/
        //changing the clicked value to the opposite
        this.setState({selected: !this.state.selected})
    }
    render () {
        return (
            <>
                <Nav>
                    {/*React NavLink different from Route Link*/}
                    <NavLink to ="/">
                        <img src={Logo} height="95px" width="95px" alt="Logo"/>
                    </NavLink>
                    <div onClick={this.handleClick}>
                        {/*if the hamburger menu icon is clcicked then selected is set to true and then the time icon would appear*/}
                        {this.state.selected ? <Times />: <Bars />}
                        {/*<i className = 'fas fa-times' /> */}
                    </div>
                    
                    {/*sMobile version sidebar using the map function*/}
                    {/*<ul className={this.state.clicked ? 'nav-_enu_active':'nav-menu'}>
                       {NavMenuItems.map((item, index) => {
                           return(
                               <li key={index}>
                                   <a className={item.className} href={item.url}>
                                       {item.title}
                                   </a>
                               </li>
                           )
                       })}
                    </ul>*/}
                    <NavMenu>
                        <NavLink to = "/about" activeStyle>
                            About
                        </NavLink>
                        <NavLink to = "/shop" activeStyle>
                            Shop
                        </NavLink>
                        <NavLink to = "/shop" activeStyle>
                            Collection
                        </NavLink>
                        <NavLink to = "/loyalty" activeStyle>
                            Rewards Club
                        </NavLink>
                        <NavLink>
                            Contact Us
                        </NavLink>
                        <CustomBtn txt="Join Our Community"/>
                    </NavMenu>
                    {/*<NavBtn>
                        
                        {/*<NavBtnLink to="/Login">Sign In</NavBtnLink>*/}
                    {/*</NavBtn>*/}
                </Nav>
            </>
        );
    }
    
}


export default Navbar