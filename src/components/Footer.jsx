import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2024 Rai Hospital. All Rights Reserved.</p>
          <p>Trademark of Your Hospital</p>
        </div>
        <div className="footer-right">
          <ul className="quick-links">
            <li><a href="/vision">Our Vision</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            {/* <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-use">Terms of Use</a></li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
