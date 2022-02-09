import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Head.scss';
function Head() {
    return (
        <div className="cofeeHeader">
            <Navbar />
            <div className="title">
                Our Coffee
            </div>
        </div>
    )
}
export default Head;