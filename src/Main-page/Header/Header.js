import React from "react";
import Logo from '../img/Logo.svg';
import emblem from '../img/emblem.png';
import Navbar from '../../Component/Navbar/Navbar'
import './Header.scss'
function Header() {
    return (
        <div className='head'>
            <Navbar/>
            <div className="main">
                <div className="title">
                    Everything You Love About Coffee
                </div>
                <div className="sub_logo">
                    <img src={emblem} />
                </div>
                <div className="subtitle">
                    We makes every day full of energy and taste
                </div>
                <div className="subtitle__sub">
                    Want to try our beans?
                </div>
                <div className="btn">
                    More
                </div>
            </div>
        </div>
    )
}
export default Header