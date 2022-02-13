import React, { Component } from "react";
import Card from "../Card/Card";
import "./Filter.scss";

function Filter({ data, onUpdateSearch, term, filter, onFilterSelect }) {
  // const onUpdateSearch = (e) => {
  //     const term = e.target.value;
  //     console.log({term})
  //     // this.setState({ term });
  //     // this.props.onUpdateSearch(term)
  // }

  const buttonsData = [
    { name: "Brazil", label: "Brazil" },
    { name: "Keniya", label: "Keniya" },
    { name: "Columbia", label: "Columbia" },
  ];
  const buttons = buttonsData.map(({ name, label }) => {
    const active = filter === name;
    const clazz = active ? "active" : "";
    return (
      <button className={`btn ${clazz}`} onClick={() => onFilterSelect(name)}>
        {label}
      </button>
    );
  });

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
          {buttons}
        </div>
      </div>
      <div className="cardPage">
        {data.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </>
  );
}
// onUpdateSearch = (e) => {
//     const term = e.target.value;
//     this.setState({ term })
//     this.props.onUpdateSearch(term)
// }

export default Filter;
