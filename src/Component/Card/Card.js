import React, { Component } from "react";
import { useNavigate } from "react-router";

import "./Card.scss";

const Card = ({ item }) => {

  const navigate = useNavigate()
  //   function ref(item) {
  //     const top = item.rise === true;
  //     const clazz = top ? "block" : "";
  //     return <div className={`country ${clazz}`}>{item.country}</div>;
  //   //   }
  //     const solution  = item.rise === true;
  return (
    <div className="item" onClick={()=>{
      navigate(`/ourCofee/${item.id}`)
    }}>
      <div className="img">
        <img src={item.img} />
      </div>
      <div className="describe">{item.title}</div>
      {/* {ref(item)} */}
      <div className="country">{item.country}</div>
      <div className="price">{item.price}$</div>
    </div>
  );
};
export default Card;
