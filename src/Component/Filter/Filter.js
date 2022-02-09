import React, { Component } from "react";
import Card from "../Card/Card";
import './Filter.scss'

function Filter ({ data, onUpdateSearch, term }) {

    // const onUpdateSearch = (e) => {
    //     const term = e.target.value;
    //     console.log({term})
    //     // this.setState({ term });
    //     // this.props.onUpdateSearch(term)
    // }
    return (
        
        <>
            <div className="filter">
                <div className="look">
                    <label>Lookiing for</label>
                    <input
                        type="text"
                        placeholder="start typing here..."
                        value={term}
                        onChange={(e) => onUpdateSearch(e.target.value)}
                    />
                </div>
                <div className="filt">
                    <label>Or filter</label>
                    <button>Brazil</button>
                    <button>Kenya</button>
                    <button>Columbia</button>
                </div>

            </div>
            <div className="cardPage">
                {data.map(item => {
                    return <Card item={item} />
                })}
            </div>
        </>
    )
}
// onUpdateSearch = (e) => {
//     const term = e.target.value;
//     this.setState({ term })
//     this.props.onUpdateSearch(term)
// }






export default Filter;