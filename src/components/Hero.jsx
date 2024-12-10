// src/components/Hero.js
import React, { useState } from "react";
import "../styles/Hero.css";
import Modal from "./Modal";

const Hero = () => {
  
  const [isModalOpen, setModalOpen] = useState(false);

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

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Our Hospital</h1>
        <p className="hero-subtitle">
          Committed to Providing the Best Healthcare Services
        </p>
        <a href="#contact" className="hero-cta" onClick={handleModalOpen}>
          Place Enquiry
        </a>
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSubmit={handleFormSubmit}
        />
      </div>
    </section>
  );
};

export default Hero;
