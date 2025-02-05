import React from "react";
import "../core.css";
import "./LandingImg.css";

const LandingImg = ({ img, text }) => {
  return (
    <div className="landing-image">
      <img src={img} alt="Landing" />
      <div className="image-text">{text}</div>
    </div>
  );
};

export default LandingImg;
