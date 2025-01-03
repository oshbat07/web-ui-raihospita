import React from "react";
import "../styles/Hero.css";
// import EnquiryModal from "../utils/EnquiryModal";
// import Button from "./Button";

const Hero = ({isModalOpen, setModalOpen}) => {

  //  const handleModalOpen = () => {
  //   setModalOpen(true);
  // };
  // const handleModalClose = () => {
  //   setModalOpen(false);
  // };
  // const handleFormSubmit = (formData) => {
  //   console.log("Form Submitted:", formData);
  //   alert("Form Submitted!");
  // };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Our Hospital</h1>
        <p className="hero-subtitle">
          Committed to Providing the Best Healthcare Services
        </p>
        {/* <div className="hero-cta">
          <Button
            icon="faCalendarDays"
            description="Make an Appointment"
            onClick={handleModalOpen}
          />
        </div> */}
        {/* <EnquiryModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSubmit={handleFormSubmit}
        /> */}
      </div>
    </section>
  );
};

export default Hero;
