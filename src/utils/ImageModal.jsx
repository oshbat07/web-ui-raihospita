import React from "react";
import "../styles/ImageModal.css";

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Enlarged view" className="modal-image" />
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
