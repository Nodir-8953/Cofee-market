import React, { Component } from 'react';


import './Card.scss';


const Card = ({item}) => {
    return (

        <div className="item">
            <div className="img">
                <img src={item.img} />
            </div>
            <div className="describe">
                {item.title}
            </div>
            <div className="country">
                {item.country}
            </div>
            <div className="price">
                {item.price}$
            </div>
        </div>
    )
}
export default Card