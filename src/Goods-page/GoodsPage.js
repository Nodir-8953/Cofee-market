import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Card from "../Component/Card/Card";
import Footer from "../Component/Footer/Footer";
import jpg from '../Images/jpg.png';
import Goods from '../Images/Goods.png';
import './GoodsPage.scss';
function GoodsPage({ data }) {
    return (
        <div>
            <div className="cofeeHeader">
                <Navbar />
                <div className="title">
                    For your pleasure
                </div>
            </div>
            <div className="cofeeAbout">
                <div className="wrap">
                    <div className="image">
                        <img src={Goods} />
                    </div>
                    <div className="beats">
                        <div className="title">
                            About our beans
                        </div>
                        <div className="title-img">
                            <img src={jpg} />
                        </div>
                        <div className="sub-title">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br />
                            <br />
                            Afraid at highly months do things on at. Situation recommend objection do intention<br />
                            so questions.<br />
                            As greatly removed calling pleased improve an.<br /> Last ask him cold feel<br />
                            met spot shy want. Children me laughing we<br /> prospect answered followed. At it went<br />
                            is song that held help face.

                        </div>
                    </div>

                </div>
                <div className="line"></div>
            </div>
            <div className="item-wrapper">
                {
                    data.map(item => {
                        return <Card item={item} />
                    })
                }
            </div>
            <Footer />
        </div>)
}
export default GoodsPage;