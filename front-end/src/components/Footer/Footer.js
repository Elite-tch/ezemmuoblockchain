import React from "react";
import {Link} from 'react-router-dom';
import "./Footer.css"; // Ensure the CSS file is imported

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="logo-section">
          <img src="/images/footer2.png" alt="" className="logo-image" />
          <h1 className="logo-text">
            Ezemmuo <br /> Blockchain
          </h1>
        </div>

        <div className="links-section">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/blog" className="footer-link">
            Blog
          </Link>
          <Link to="/community" className="footer-link">
            Communities
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>{new Date().getFullYear()} Copyright. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
