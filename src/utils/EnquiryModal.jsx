import React, { useState } from "react";
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

  const today = new Date().toISOString().split("T")[0];

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: '80vw',
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom sx={{display: 'flex', justifyContent: 'center'}}>
          Make an Appointment
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
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
          <FormControl fullWidth margin="normal">
          <InputLabel id="date-label">Preferred Date</InputLabel>
          <TextField
            fullWidth
            margin="normal"
            labelId="date-label"
            name="date"
            type="date"
            inputProps= {{min: today}} 
            value={formData.date}
            onChange={handleChange}
            error={!!errors.date}
            helperText={errors.date}
          />
</FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="time-label">Preferred Time</InputLabel>
            <Select
              labelId="time-label"
              name="time"
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
            margin="normal"
            label="Description"
            name="description"
            multiline
            rows={4}
            value={formData.description}
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
        </form>
      </Box>
    </Modal>
  );
};

export default EnquiryModal;
