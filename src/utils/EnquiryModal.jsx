import React, { useState } from "react";
import "../styles/EnquiryModal.css";
import { services } from "../data/serviceData";

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    // email: "",
    ailment: "",
    description: "",
    time: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Validation logic
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!formData.email.trim()) {
    //   newErrors.email = "Email is required.";
    // } else if (!emailPattern.test(formData.email)) {
    //   newErrors.email = "Invalid email format.";
    // }
    if (!formData.date) {
      newErrors.date = "Preferred date is required.";
    }
    if (!formData.time) {
      newErrors.time = "Preferred time is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Data Submitted:", formData);
      onClose();
    }
    setFormData({
      name: "",
      phone: "",
      // email: "",
      ailment: "",
      date: "",
      description: "",
      time: "",
    })
  };
  // Generate time options in 30-minute intervals
  const generateTimeOptions = () => {
    const times = [];
    let current = new Date();
    current.setHours(8, 0, 0, 0); // Start time (9:00 AM)
    const end = new Date();
    end.setHours(22, 0, 0, 0); // End time (5:00 PM)

    while (current <= end) {
      const timeString = current.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      times.push(timeString);
      current.setMinutes(current.getMinutes() + 30);
    }
    return times;
  };
  const today = new Date().toISOString().split("T")[0];
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <label htmlFor="phone">Phone:</label>
          <input 
            className='modal-input'
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
          {errors.phone && <span className="error">{errors.phone}</span>}

          {/* <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          {errors.email && <span className="error">{errors.email}</span>} */}

          <label htmlFor="ailment">Ailment Type:</label>
          <select
            id="ailment"
            name="ailment"
            value={formData.ailment}
            onChange={handleChange}
            required
          >
            {services.map((service) => {
              return (
                <option key={service.name} value={service.name}>
                  {service.name}
                </option>
              );
            })}
          </select>
          <label htmlFor="date">Preferred Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={today}
            required
          />
          {errors.date && <span className="error">{errors.date}</span>}
          <label htmlFor="time">Preferred Time:</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">Select a time</option>
            {generateTimeOptions().map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && <span className="error">{errors.time}</span>}
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your issue"
            required
          ></textarea>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
