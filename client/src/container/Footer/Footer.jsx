import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import arrow from "../../assets/arrow.png";
import eventech from "../../assets/eventech.png";

import "./Footer.css";

const Footer = () => (
  <div className="custom-footer padding-section" id="login">
    <div className="custom-footer-overlaying">
      <div className="custom-footer-overlaying-black" />
      <div className="custom-footer-overlaying-img custom-bg" />
    </div>

    <div className="custom-footer-links">
      <div className="custom-footer-links-logo">
        <img src={eventech} alt="footer-logo" />
        <p className="small-parag">
          &quot;Your favorite platform to stay up-to-date with the latest
          events.&quot;
        </p>
        <img src={arrow} className="arrow-img" style={{ marginTop: 15 }} />
        <div className="custom-footer-links-icons">
          <a href="https://github.com/riz1ash786/eventech">   <AiFillGithub /></a>
          <a href="https://www.linkedin.com/"> <AiFillLinkedin /></a>
        
          
        </div>
      </div>
    </div>

    <div className="footer-cr">
      <p className="small-parag">2022 Eventech. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
