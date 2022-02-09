import React from "react";
import Head from "../Component/Head/Head";
import Footer from "../Component/Footer/Footer";
import item from '../Images/Item.png';
import jpg from '../Images/jpg.png';
import './itemPage.scss';
function ItemPage() {
    return (
        <div className="container">
            <Head />
            <div className="wrap">
                <div className="image">
                    <img src={item} />
                </div>
                <div className="beats">
                    <div className="title">
                        About our beans
                    </div>
                    <div className="title-img">
                        <img src={jpg} />
                    </div>
                    <div className="subtitle">
                        <span>Country: </span>Brasil
                        <br />
                        <br />
                        <span>Description: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                    </div>
                    <div className="subprice">
                        Price:<span> 16.99$</span>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>)
}
export default ItemPage;