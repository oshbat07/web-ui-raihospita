import React from "react";
import { Button } from "@mui/material";
import IconComponent from "./IconComponent";

const AppointmentButton = ({ icon, description, onClick }) => {
  return (
    <Button
      variant="contained"
      startIcon={<IconComponent iconName={icon} />}
      onClick={onClick}
      sx={{ display: "flex", alignItems: "center" }}
      color="success"
    >
      {description}
    </Button>
  );
};

export default AppointmentButton;
