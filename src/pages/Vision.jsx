import React from 'react'
import '../styles/Vision.css'
import IconComponent from '../utils/IconComponent';

export default function Vision() {
  return (
    <div>
      <div class="vision-card-container">
        <div class="vision-card">
          <div class="icon">
            <IconComponent iconName={'faBullseye'}  />
          </div>
          <h3>Our Mission</h3>
          <p>
            "At Rai Hospital, our mission is to provide exceptional healthcare with compassion and innovation. We aim to enhance community well-being through advanced medical care, patient-centered services, and continuous improvement in quality and safety."
          </p>
        </div>
        <div class="vision-card">
          <div class="icon">
            <IconComponent iconName={'faLightbulb'} />
          </div>
          <h3>Our Vision</h3>
          <p>
            "To lead in healthcare excellence, innovation, and compassion, providing top-quality care for all, ensuring the same high standard of service for both the poor and the rich, and advancing community health with continuous improvement."
          </p>
        </div>
        <div class="vision-card">
          <div class="icon">
            <IconComponent iconName={'faFileLines'} />
          </div>
          <h3>Our Motto</h3>
          <p>
            "Compassion, Care, Commitment - Healthcare for All."
          </p>
        </div>
      </div>
    </div>
  )
}
