import React from 'react';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import eventech from '../../assets/eventech.png';
import './Navbar.css';
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';
import {AiOutlineHeart} from 'react-icons/ai';

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


         <Link to="/addevent">
          <li className="small-parag">
             <button className="logout-btn">
               Add Event
              </button>
          </li>
          </Link>

           <li className="small-parag">
             <button onClick={logout} className="logout-btn">
               Logout
              </button>
          </li>

      <li className="small-parag heart">
          <Link to="/interested">     
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
           
                <Link to="/addevent">
                 <li className="small-parag">
                   <button className="logout-btn" onClick={()=>  setToggleMenu(false)}>
                        Add Event
                    </button>
                 </li>
                 </Link>

                 <li className="small-parag" onClick={logout}>
                   <button className="logout-btn" onClick={()=>  setToggleMenu(false)}>
                        Logout
                    </button>
                 </li>


                 <li className="small-parag heart">
                   <Link to="/interested" onClick={()=>  setToggleMenu(false)}>     
                       <AiOutlineHeart
                        fontSize={35}
                     /></Link> 
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
