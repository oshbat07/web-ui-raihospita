import React from "react";
import "../styles/Photo.css";
import { photosData } from "../data/photosData";
import PhotoCard from "../utils/PhotoCard";

export default function Photos() {
  return (
    <>
      <div className="photo">
        <h1>Photo Gallery</h1>
        <p>
          Our hospital has been serving the community for over 20 years. We
          offer a wide range of healthcare services to cater to all your medical
          needs.
        </p>
        <div className="image-cards">
          {photosData.map((item) => {
            return (
              <PhotoCard
                key={item.id}
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                caption={item.caption}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
