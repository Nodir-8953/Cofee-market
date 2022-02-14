import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../Images/Logo.svg';
import './Navbar.scss'
function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="#"><img src={Logo} /></a>
            </div>
            <ul>
                <li><Link to="/">Coffee house</Link></li>
                <li><Link to="/ourCofee">Our coffee</Link></li>
                <li><Link to="/forYour">For your pleasure</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;