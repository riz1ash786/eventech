import React from 'react';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import eventech from '../../assets/eventech.png';
import './Navbar.css';
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav className="custom-navbar">
      {/* Logo */}
     
      <div className="custom-navbar-logo">
      <Link to="/">
        <img src={eventech} alt="custom-logo" />
      </Link>
      </div>
      
      {/* Navbar */}
      <ul className="custom-navbar-links">
        <li className="small-parag">
        <Link to="/">
          Home
        </Link>
        </li>
        <li className="small-parag">
        <Link to="/events">
          Events
        </Link>
        </li>
       
        {Auth.loggedIn() ? (
          <>
           <li className="small-parag">
             <button onClick={logout}>
               Logout
              </button>
          </li>
          </>
        ):(
          <>
          <li className="small-parag">
             <Link to="/login">
               Login
             </Link>
          </li>
          <li className="small-parag">
             <Link to="/signup">
               Signup
             </Link>
          </li>
          </>
        )}
        
      </ul>
      {/* Navbar for small Screens */}
      <div className="custom-navbar-smallscreen">
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
                <Link to="/" onClick={() => setToggleMenu(false)}> Home </Link>
              </li>
              <li>
              <Link to="/events" onClick={() => setToggleMenu(false)}> Events </Link>
              </li>
              {Auth.loggedIn() ? (
                <>
                  <li className="small-parag" onClick={logout}>
                   <button onClick={()=>  setToggleMenu(false)}>
                        Logout
                    </button>
                 </li>
              </>
              ):(
                <>
                <li>
                <Link to="/signup" onClick={() => setToggleMenu(false)}> Signup </Link>
                </li>
                <li>
                <Link to="/login" onClick={() => setToggleMenu(false)}> Login </Link>
                </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
