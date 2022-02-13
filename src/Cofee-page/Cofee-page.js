import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Filter from "../Component/Filter/Filter";
import Head from "../Component/Head/Head";
import Footer from "../Component/Footer/Footer";

import CofeePagePhoto from "../Images/CofeePagePhoto.png";
import jpg from "../Images/jpg.png";
import "./Cofee-page.scss";

function CofeePage({ data, onUpdateSearch, term, filter, onFilterSelect }) {
  return (
    <>
      <Head />
      <div className="cofeeAbout">
        <div className="wrap">
          <div className="image">
            <img src={CofeePagePhoto} />
          </div>
          <div className="beats">
            <div className="title">About our beans</div>
            <div className="title-img">
              <img src={jpg} />
            </div>
            <div className="sub-title">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br />
              <br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention
              <br />
              so questions.
              <br />
              As greatly removed calling pleased improve an.
              <br /> Last ask him cold feel
              <br />
              met spot shy want. Children me laughing we
              <br /> prospect answered followed. At it went
              <br />
              is song that held help face.
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
      <div className="filterPage">
        <Filter
          data={data}
          onUpdateSearch={onUpdateSearch}
          term={term}
          filter={filter}
          onFilterSelect={onFilterSelect}
        />
      </div>
      <Footer />
    </>
  );
}
export default CofeePage;
