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
  );
};

export default Hero;
