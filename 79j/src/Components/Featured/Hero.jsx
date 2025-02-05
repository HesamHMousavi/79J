import React from "react";
import "../core.css";
import "./Hero.css";

const Hero = ({ img, text, reverseOrder = false, title }) => {
  return (
    <div className="max-width">
      <div className={`hero ${reverseOrder ? "reverse" : ""}`}>
        {reverseOrder ? (
          <>
            <div className="item-2">
              <img src={img} alt="Hero" />
            </div>
            <div className="item-1">
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </>
        ) : (
          <>
            <div className="item-1">
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <div className="item-2">
              <img src={img} alt="Hero" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
