import React from "react";

import conference from "../../assets/conference.png";
import arrow from "../../assets/arrow.png";
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="custom-header custom-wrap padding-section" id="home">
    <div className="info-wrap">
      <div>
        <p className="subtitle">Stay up-to-date with the latest</p>
        <img src={arrow} alt="arrow_image" className="arrow-img" />
      </div>
      <h1 className="custom-header-h1">Tech Events & Conferences</h1>
      <p className="small-parag" style={{ margin: "2rem 0" }}>
        An app where you can find all the upcoming tech events and conferences,
        create your own event and more ...
      </p>
      <button type="button" className="custom-btn cutom-color-btn">
        <Link to="/events" style={{color:"black"}}>
        Explore Upcoming Events
        </Link>
      </button>
    </div>

    <div className="img-wrap">
      <img src={conference} alt="header_img" />
    </div>
  </div>
);

export default Header;
