import React from "react";
import Logo from '../../Images/Logo.svg';
import './Navbar.scss'
function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="#"><img src={Logo} /></a>
            </div>
            <ul>
                <li><a href="#">Coffee house</a></li>
                <li><a href="#">Our coffee</a></li>
                <li><a href="#">For your pleasure</a></li>
            </ul>
        </div>
    )
}
export default Navbar;