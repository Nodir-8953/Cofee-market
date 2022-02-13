import React from "react";
import Head from "../Component/Head/Head";
import Footer from "../Component/Footer/Footer";
import item from "../Images/Item.png";
import jpg from "../Images/jpg.png";
import "./itemPage.scss";
function ItemPage({ itemSelect }) {
  return (
    <div className="container">
      <Head />
      {itemSelect.map((item) => (
        <div className="wrap">
          <div className="image">
            <img src={item.img} />
          </div>
          <div className="beats">
            <div className="title">About our beans</div>
            <div className="title-img">
              <img src={jpg} />
            </div>
            <div className="subtitle">
              <span>Country: </span>
              {item.country}
              <br />
              <br />
              <span>Description: </span>
              {item.description}
            </div>
            <div className="subprice">
              Price:<span> {item.price}$</span>
            </div>
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
}
export default ItemPage;
