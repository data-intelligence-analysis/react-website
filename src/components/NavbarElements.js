//..Style for the Navbar_v2.js

//Styles from styled-components used to define styles for tags
import styled from 'styled-components'
// NavLink component from react-router-dom
import {NavLink as Link } from 'react-router-dom'
//Hamburger icon
import {FaBars} from 'react-icons/fa'

//z-index - ensure navbar is above majority of the content
//Add styles for <Nav> tag //lighter color - #eedbbe, #5a8951 //dark green -#266041 , //lighter bage -  #f8efd6 //darker bage - #dec092 
export const Nav = styled.nav`
    background: transparent;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px)/2);
    z-index: 10;
`

//Styles for the NavLink tag and activeStyles
export const NavLink = styled.nav`
    color: #266041;
    display: flex;
    
    align-items: center;
    text-decoration: none;
    padding 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active{
        color: #fff;
    }
`
//Using hamburger icons (display: none - should not show in desktop version)
export const Bars = styled(FaBars)`
    display: none;
    color: #7b4f2f;

    @media screen and (max-width: 760px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 80%);
        font-size: 2rem;
    }
`
//Styling for NavMenu (margin-right -> the button has a margin on the other side of it so need to recenter for NavMenu items)
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    /*margin-right: -24px;*/

    /*Second Nav*/
    margin-right: 18px;
    @media screen and (max-width: 760px){
        display: none;
    }
    @media screen and (max-width: 1000px){

    }
`

//Styling for NavBtn
export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 760px){
        display: none;
    }

`

export const NavBtnLink = styled(Link)`
    border-radius: 5px;
    background: #7b4f2f;
    padding: 5px 11px;
    color: #dec092;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover: {
        transition: all 0.2s ease-in-out;
        background:  "#5a8951";
        color: "#735240";
    },
`


