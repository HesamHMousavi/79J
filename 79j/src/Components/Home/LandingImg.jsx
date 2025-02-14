import React from "react";
import "../core.css";
import "./LandingImg.css";

const LandingImg = ({ images }) => {
  return (
    <div className="landing-image-container">
      {images.map((item, index) => (
        <div className="landing-image" key={index}>
          <img src={item} alt={`Landing ${index + 1}`} />
          <div className="image-text-home-land">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default LandingImg;
