import React from "react";
import "../styles/GenericCard.css";
import IconComponent from "../utils/IconComponent";

export default function GenericCard({ icon, header, description }) {
  return (
    <div class="generic-card">
      <div class="icon">
        <IconComponent iconName={icon} />
      </div>
      <h3>{header}</h3>
      <p>{description}</p>
    </div>
  );
}
