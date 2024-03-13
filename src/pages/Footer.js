
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <div className="footer-logo">
            <img src="graduation-hat.png" alt="Logo" />
            <br />
            <span>Excelegal</span>
          </div>
        </div>
        <div className="footer-column">
          <ul>
            <li>Contact Us</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
          
          <li>Refer and Earn</li>
            <li>T&C's</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
          
            <li>About Us</li>
            {/* <li>Privacy Policy</li> */}
            {/* <Link to="privacy">Privacy Policy</Link> */}
            <Link to="/Privacy" style={{ color: 'white' }}>Privacy policy</Link>

          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Excelegal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
