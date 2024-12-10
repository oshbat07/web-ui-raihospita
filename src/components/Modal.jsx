import React, { useState } from "react";
import "../styles/Modal.css"; // Import styles for modal

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", contact: "", email: "", description: "" });
    onClose(); // Close modal after submission
    console.log('formData', formData)
  };

  return (
    isOpen && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>Enquiry Form</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <input
                type="tel"
                id="contact"
                name="contact"
                pattern="[789][0-9]{9}"
                maxLength={13}
                minLength={10}
                value={formData.contact}
                onChange={handleInputChange}
                required
                placeholder="Your Contact Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Your Email Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Enquiry Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                placeholder="Your Enquiry"
              ></textarea>
            </div>
            <div className="form-actions">
              <button type="button" onClick={onClose}>
                Cancel
              </button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;
