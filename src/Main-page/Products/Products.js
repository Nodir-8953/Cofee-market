import React from 'react';
import './Products.scss';
import Card from '../../Component/Card/Card'


function Products() {
    return (
        <div className="product">
            <div className="title">
                Our best
            </div>
            <div className="wrapper">
                <Card/>
            </div>
        </div>
    )
}
export default Products