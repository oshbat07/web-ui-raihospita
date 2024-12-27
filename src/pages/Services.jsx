import React from "react";
import "../styles/Services.css";
import IconComponent from "../utils/IconComponent";
export const services = [
  { name: "Cardiology", icon: "faHeartbeat" },
  { name: "Neurology", icon: "faBrain" },
  { name: "Orthopedics", icon: "faBone" },
  { name: "Pediatrics", icon: "faChild" },
  { name: "Gynecology", icon: "faUserMd" },
  { name: "Radiology", icon: "faXRay" },
  { name: "Oncology", icon: "faRibbon" },
  { name: "Emergency Care", icon: "faAmbulance" },
  { name: "Vaccination", icon: "faSyringe" },
  { name: "General Surgery", icon: "faMaskFace" },
  { name: "General Medicine", icon: "faStethoscope" },
  { name: "Respiratory", icon: "faLungs" },
  { name: "Dermatology", icon: "faHandDots" },
];
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
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis massa nec justo feugiat, in ultrices odio tincidunt.</p> */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
