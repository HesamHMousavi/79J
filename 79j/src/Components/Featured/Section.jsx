import React from "react";
import Img from "../../Imgs/scrollItem.jpeg";
import "./Section.css";

const Section = () => {
  return (
    <div className="max-width">
      <div className="section">
        <h2>Bespoke Bridal Sets</h2>
        <h4>
          At 79 Jewellers we create bespoke bridal sets tailored to your style,
          ensuring elegance and individuality for you special day
        </h4>
        <div className="img-con">
          <img src={Img} alt="" />
          <img src={Img} alt="" />
          <img src={Img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section;
