import React from "react";
import jpg from '../../Images/jpg.png';
import Navbar from '../Navbar/Navbar'
import './Footer.scss';
function Footer() {
    return (
        <div className="footer">
            <Navbar/>
            <div className="sub__logo">
                <img src={jpg} />
            </div>
        </div>
    )
}
export default Footer;