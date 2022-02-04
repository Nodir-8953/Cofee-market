import React, { Component } from 'react';

import product1 from '../../Main-page/img/product-1.png'
import product2 from '../../Main-page/img/product-2.png'
import product3 from '../../Main-page/img/product-3.png'
import './Card.scss';


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { img: product1, title: 'Solimo Coffee Beans 2 kg', price: 10.73, country: 'Brazil', rise: false, id: 1 },
                { img: product2, title: 'SPresto Coffee Beans 1 kg', price: 15.99, country: 'Keniya', rise: false, id: 2 },
                { img: product3, title: 'AROMISTICO Coffee 1 kg', price: 6.99, country: 'Columbia', rise: false, id: 3 }
            ]
        }

    }
    render() {
        const { data } = this.state;
        return (
            data.map(item => (
                <div className="item">
                    <div className="img">
                        <img src={item.img} />
                    </div>
                    <div className="describe">
                        {item.title}
                    </div>
                    <div className="price">
                        {item.price}
                    </div>
                </div>
            ))
        )
    }

}
export default Card