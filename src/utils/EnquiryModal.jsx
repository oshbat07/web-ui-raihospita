import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { services } from "../data/serviceData";
import "../styles/EnquiryModal.css";

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
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
      setFormData({
        name: "",
        phone: "",
        ailment: "",
        date: "",
        description: "",
        time: "",
      });
    }
  };

  const generateTimeOptions = () => {
    const times = [];
    let current = new Date();
    current.setHours(8, 0, 0, 0);
    const end = new Date();
    end.setHours(22, 0, 0, 0);

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
const handleClose = () => {
  onClose();
  setFormData({
    name: "",
    phone: "",
    date: "",
    ailment: "",
    description: "",
    time: "",
  })
  setErrors({})
}
  useEffect(() => {
    setFormData({
      name: "",
      phone: "",
      date: "",
      ailment: "",
      description: "",
      time: "",
    });
    setErrors({})
  }, [isOpen]);

  const today = new Date().toISOString().split("T")[0];

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "400px",
          width: "70vw",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{ display: "flex", justifyContent: "center" }}
        >
          Make an Appointment
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            className="modal-formField"
            variant="standard"
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            fullWidth
            className="modal-formField"
            variant="standard"
            margin="normal"
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="ailment-label">Ailment Type</InputLabel>
            <Select
              labelId="ailment-label"
              variant="standard"
              className="modal-formField"
              name="ailment"
              value={formData.ailment}
              onChange={handleChange}
            >
              {services.map((service) => (
                <MenuItem key={service.name} value={service.name}>
                  {service.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            className="modal-formField"
            variant="standard"
            margin="normal"
            name="date"
            type="date"
            inputProps={{ min: today }}
            // label="Preferred Date"
            value={formData.date}
            onChange={handleChange}
            error={!!errors.date}
            helperText={errors.date}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="time-label">Preferred Time</InputLabel>
            <Select
              labelId="time-label"
              className="modal-formField"
              name="time"
              variant="standard"
              value={formData.time}
              onChange={handleChange}
            >
              {generateTimeOptions().map((time, index) => (
                <MenuItem key={index} value={time}>
                  {time}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            className="modal-formField"
            margin="normal"
            label="Description"
            name="description"
            rows={1}
            value={formData.description}
            variant="standard"
            onChange={handleChange}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="error"
            type="close"
            sx={{ mt: 2 }}
            onClick={handleClose}
          >
            Close
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default EnquiryModal;
