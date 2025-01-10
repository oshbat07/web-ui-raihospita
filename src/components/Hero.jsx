import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Hero.css";
import { homePagePhotos } from "../data/photosData";

const Hero = ({ isModalOpen, setModalOpen }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    Speed: 2000,
  };

  return (
    <div className="hero">
      <div className="hero-slider">
        <Slider {...settings}>
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
        <h1>Why Choose Rai Hospital & Research Center?</h1>
        <p>
          Rai Hospital and Research Center is a trusted name in healthcare,
          offering comprehensive medical solutions under one roof. As a
          state-of-the-art multispecialty hospital, we are equipped with 50+
          beds and provide 25+ specialized services, ensuring that every patient
          receives personalized and effective treatment. Our dedicated team of
          expert doctors, skilled nurses, and compassionate staff work
          tirelessly to deliver the highest standards of care.
        </p>
        <p>
          <b>
            What sets us apart is our commitment to innovation and continuous
            improvement?
          </b>{" "}
          <br />
          Our upcoming research center is poised to bring cutting-edge
          advancements to patient care, bridging the gap between medical
          research and practical healthcare solutions. With modern
          infrastructure, advanced diagnostic tools, and a patient-centric
          approach, Rai Hospital aims to be a beacon of hope and healing for the
          community. Choose Rai Hospital for quality healthcare that combines
          expertise, technology, and a vision for a healthier tomorrow.{" "}
        </p>
      </div>
    </div>
  );
};

export default Hero;
