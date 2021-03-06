import React from "react";
import emblem from "../Images/emblem.png";
import Navbar from "../Component/Navbar/Navbar";
import Card from "../Component/Card/Card";
import Footer from "../Component/Footer/Footer";
import "./Main-page.scss";

import jpg from "../Images/jpg.png";

function MainPage({ data }) {
  return (
    <>
      <div className="head">
        <Navbar />
        <div className="main">
          <div className="title">Everything You Love About Coffee</div>
          <div className="sub_logo">
            <img src={emblem} />
          </div>
          <div className="subtitle">
            We makes every day full of energy and taste
          </div>
          <div className="subtitle__sub">Want to try our beans?</div>
          <div className="btn">More</div>
        </div>
      </div>
      <div className="about">
        <div className="title">About Us</div>
        <div className="subtitle">
          <img src={jpg} />
        </div>
        <div className="text">
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible. Afraid at highly months do things on at. Situation
          recommend objection do intention so questions. As greatly removed
          calling pleased improve an. Last ask him cold feel met spot shy want.
          Children me laughing we prospect answered followed. At it went is song
          that held help face.
          <br />
          <br />
          Now residence dashwoods she excellent you. Shade being under his bed
          her, Much read on as draw. Blessing for ignorant exercise any yourself
          unpacked. Pleasant horrible but confined day end marriage. Eagerness
          furniture set preserved far recommend. Did even but nor are most gave
          hope. Secure active living depend son repair day ladies now.
        </div>
      </div>
      <div className="product">
        <div className="title">Our best</div>
        <div className="wrapper">
          {data.map((item) => {
            //agar item rise = item.country.styles{""}
            // if (item.rise) {
            //   var xyzStyles = { display: "none" };
            //   return item.filter((item) =>
            //     item.country.setStyle("country", xyzStyles)
            //   );
            // }
            return <Card item={item} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default MainPage;
