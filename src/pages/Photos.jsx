import React, { useState } from "react";
import "../styles/Photo.css";
import { photosData } from "../data/photosData";
import PhotoCard from "../utils/PhotoCard";
import ImageModal from "../utils/ImageModal";

export default function Photos() {
  const [selectedImage, setSelectedImage] = useState(null);
  // const [isOpen, setIsOpen] = useState(false);
  // const handleCardClick = (image) => {
  //   setIsOpen(true);
  //   setSelectedImage(image);
  // };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
                // onClick={() => handleCardClick(item.src)}
              />
            );
          })}
        </div>
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            // isOpen={isOpen}
            onClose={closeModal}
          />
        )}
      </div>
    </>
  );
}
