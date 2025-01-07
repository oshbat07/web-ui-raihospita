// src/components/Header.js
import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import EnquiryModal from "../utils/EnquiryModal";
import AppointmentButton from "../utils/AppointmentButton";
// import IconComponent from "../utils/IconComponent";

const Header = ({ isModalOpen, setModalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  //   const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleFormSubmit = (formData) => {
    console.log("Form Submitted:", formData);
    alert("Form Submitted!");
  };
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <svg>
              <Logo fill="blue" width="100%" height="100%" />
            </svg>
          </Link>
        </div>
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/vision">Our Vision</a>
            </li>
            <li className="nav-item">
              <a href="photos">Photo Gallery</a>
            </li>
            <li className="nav-item">
              <a href="services">Services</a>
            </li>
            <li className="nav-item">
              <a href="contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div>
          <AppointmentButton
            icon="faCalendarDays"
            description="Make an Appointment"
            isModalOpen={isModalOpen}
            setModalOpen={setModalOpen}
            onClick={handleModalOpen}
          />
        </div>
          <EnquiryModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            onSubmit={handleFormSubmit}
          />

        {/* <div className="contact-info">
          <span>
            <IconComponent iconName={"faPhone"} /> +91-7509642432
          </span>
          <span>
            <IconComponent iconName={"faEnvelope"} /> info@raihospital.co.in
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
