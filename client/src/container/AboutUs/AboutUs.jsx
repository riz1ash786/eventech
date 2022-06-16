import React from "react";
import T from "../../assets/T.png";
import arrow from "../../assets/arrow.png";
import light from "../../assets/light.png";
import "./AboutUs.css";
import { Link } from 'react-router-dom';

const AboutUs = () => (
  <div
    className="custom-aboutus custom-bg custom-flex-center padding-section"
    id="about"
  >
    <div className="custom-aboutus-overlay custom-flex-center">
      <img src={T} alt="T-overlay" />
    </div>

    <div className="custom-aboutus-content custom-flex-center">
      <div className="custom-aboutus-content-about">
        <h1 className="desc-text">Find Events</h1>
        <img src={arrow} alt="about_spoon" className="arrow-img" />
        <p className="small-parag">
          The best platform for everyone interested in tech to find the best
          upcoming events, all in one place!
        </p>
        <button type="button" className="custom-btn">
        <Link to="/events" style={{color:"black"}}>
          All Events
          </Link>
        </button>
      </div>

      <div className="custom-aboutus-content-light custom-flex-center">
        <img src={light} alt="about-light" />
      </div>

      <div className="custom-aboutus-content-create">
        <h1 className="desc-text">SignUp Now</h1>
        <img src={arrow} alt="arrow" className="arrow-img" />
        <p className="small-parag">
        Signup to our platform to view the latest tech events across the globe and read user reviews!
        </p>
        <button type="button" className="custom-btn">
        <Link to="/signup" style={{color:"black"}}>
          Signup
          </Link>

        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
