import React from "react";
import IconComponent from "../utils/IconComponent";
import '../styles/Button.css'

const Button = ({ icon, description, onClick }) => {
  return (
    <div>
      <button
        className="btn"
        onClick={onClick}
      >
        <IconComponent iconName={icon} />
        <span>{description}</span>
      </button>
    </div>
  );
};
export default Button;
