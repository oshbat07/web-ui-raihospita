import React from "react";
import Header from "../components/Header";
import Card from "../utils/Card";
import "../styles/About.css";
import { aboutData } from "../data/aboutData";

export default function About() {
  return (
    <>
      <Header />
      <div className="about">
        <h1>About Us</h1>
        <p>
          Our hospital has been serving the community for over 20 years. We
          offer a wide range of healthcare services to cater to all your medical
          needs.
        </p>
        <div className="image-cards">
          {aboutData.map((item) => {
            return (
              <Card
                key={item.id}
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                caption={item.caption}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
