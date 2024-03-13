
import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    
    <nav className="navbar">
      <div className="logo-container">
       
        <Link to="/">
          <img
            src="graduation-hat.png"
            alt="logo"
            style={{ height: '50px', width: '50px' }}
          />
        </Link>
        <span className="logo-text">Excelegal</span>

      </div>
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search..." className="search-input" />

      </div>
      <div className="navigation">
        {/* <Link to="/">Home</Link> */}
        <Link to="/about">About Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/AdminPanel">Admin</Link>
      </div>
    </nav>
  );
}

export default NavBar;
