import React from 'react';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import eventech from '../../assets/eventech.png';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="custom-navbar">
      {/* Logo */}
      <div className="custom-navbar-logo">
        <img src={eventech} alt="custom-logo" />
      </div>
      {/* Navbar */}
      <ul className="custom-navbar-links">
        <li className="small-parag">
          <a href="#home">Home</a>
        </li>
        <li className="small-parag">
          <a href="#about">About</a>
        </li>
        <li className="small-parag">
          <a href="#menu">Events</a>
        </li>
        <li className="small-parag">
          <a href="#menu">Login | Signup</a>
        </li>
      </ul>
      {/* Navbar for small Screens */}
      {/* <div className="custom-navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="custom-navbar-smallscreen-overlay flex-center sliding">
            <CgClose
              className="overlay-close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="custom-navbar-smallscreen-links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Events
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Login | Signup
                </a>
              </li>
            </ul>
          </div>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;
