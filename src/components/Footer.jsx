import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2024 Rai Hospital & Research Center. All Rights Reserved.</p>
        </div>
        <div className="footer-right">
          <ul className="quick-links">
            <li><a href="/vision">Our Vision</a></li>
             <li><a href="/photos">Photo Gallery</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
