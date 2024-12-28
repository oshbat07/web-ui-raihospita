import React from "react";
import "../styles/Services.css";
import IconComponent from "../utils/IconComponent";
import { services } from "../data/serviceData";

const Services = () => {
  return (
    <>
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <IconComponent iconName={service.icon} />
              </div>
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
