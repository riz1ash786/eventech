import React from 'react';
import {useState, useParams, useNavigate } from "react-router-dom";

import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import eventech from '../../assets/eventech.png';
import './Navbar.css';
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';
import {AiOutlineHeart} from 'react-icons/ai';
import { QUERY_SAVED_EVENTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const { data, loading} = useQuery(QUERY_SAVED_EVENTS, {
    fetchPolicy: "network-only",
  });

  return (loading ? (
    <div>...Loading</div>
  ) :
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
             <button onClick={logout} className="logout-btn">
               Logout
              </button>
          </li>

      <li className="small-parag heart">
          <Link to="/interested">
          {data.me.savedCount}     
        <AiOutlineHeart
          fontSize={35}
        /></Link> 
     </li>
   
       </>
        ):(
          <>
          <li className="small-parag">
             <Link to="/login" className="actions">
               Login
             </Link>
          </li>
          <li className="small-parag">
             <Link to="/signup" className="actions">
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

              <li className="small-parag">
                   <Link to="/interested" onClick={()=>  setToggleMenu(false)}>     
                  
                     Favorites
                     </Link> 
                 </li>

                 <li className="small-parag" onClick={logout}>
                   <button className="logout-btn" onClick={()=>  setToggleMenu(false)}>
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
