import React from 'react'
import Logo from '../images/logo.png';
import CustomBtn from './CustomBtn'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                {/*React NavLink different from Route Link*/}
                <NavLink to ="/">
                    <img src={Logo} height="70" width="70" />
                </NavLink>
                <Bars/>
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
                </NavMenu>
                <NavBtn>
                    <CustomBtn txt="Join Our Community"/>
                    {/*<NavBtnLink to="/Login">Sign In</NavBtnLink>*/}
                </NavBtn>
            </Nav>
        </>
    );
}


export default Navbar