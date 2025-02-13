import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Services.css";
import "../styles/Hero.css";
import { homePagePhotos } from "../data/photosData";
import { services } from "../data/serviceData";
import IconComponent from "../utils/IconComponent";

const Hero = ({ isModalOpen, setModalOpen }) => {
  const heroSettings = {
    accessibility: true,
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 4000,
    fade: true,
    pauseOnHover: true,
  };

  return (
    <div className="hero">
      <div className="hero-slider">
        <Slider {...heroSettings}>
          {homePagePhotos.map((item) => (
            <div key={item.id}>
              <img
                src={item.src}
                alt={`Slide ${item.id + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="hero-why">
        <div className="why-description">
          <div>
            <h1>Why Choose Rai Hospital & Research Center?</h1>
            <p>
              Rai Hospital and Research Center is a trusted name in healthcare,
              offering comprehensive medical solutions under one roof. As a
              state-of-the-art multispecialty hospital, we are equipped with 50+
              beds and provide 25+ specialized services, ensuring that every
              patient receives personalized and effective treatment. Our
              dedicated team of expert doctors, skilled nurses, and
              compassionate staff work tirelessly to deliver the highest
              standards of care.
            </p>
          </div>
          <div>
            <h1>
              What sets us apart is our commitment to innovation and continuous
              improvement?
            </h1>
            <p>
              Our upcoming research center is poised to bring cutting-edge
              advancements to patient care, bridging the gap between medical
              research and practical healthcare solutions. With modern
              infrastructure, advanced diagnostic tools, and a patient-centric
              approach, Rai Hospital aims to be a beacon of hope and healing for
              the community. Choose Rai Hospital for quality healthcare that
              combines expertise, technology, and a vision for a healthier
              tomorrow.
            </p>
          </div>
        </div>
        <div className="why-photo">
          <img src={require("../assets/icu.jpg")} alt={"ICU"} />
        </div>
      </div>
      <div className="hero-services">
        <h1>Explore our Centre of Clinical Excellence</h1>
        <p>
          Rai Hospital has dedicated Centre of Excellence for several key
          specialties and super specialties. With a team of highly skilled and 
          experienced professionals, we ensure the best possible care for our
          patients. Our commitment to excellence is reflected in our state-of-the-art
          facilities and the comprehensive range of services we offer.
          <br />
          <br />
          Learn about the world class health care we provide
        </p>
        <div className="services-container">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
