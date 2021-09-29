import React from 'react'
import Logo from '../images/Concept-0.png';
import CustomBtn from './CustomBtn'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                {/*React NavLink different from Route Link*/}
                <NavLink to ="/">
                    <img src={Logo} height="95px" width="95px" alt="Logo"/>
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
                    <CustomBtn txt="Join Our Community"/>
                </NavMenu>
                {/*<NavBtn>
                    
                    {/*<NavBtnLink to="/Login">Sign In</NavBtnLink>*/}
                {/*</NavBtn>*/}
            </Nav>
        </>
    );
}


export default Navbar