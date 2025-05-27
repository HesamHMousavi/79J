import React from "react";
import "./HeroHome.css";
import goldImage from "../../Imgs/gold-bar.jpg";
const HeroHome = () => {
  return (
    <div className="bullion-section">
      <div className="bullion-image-container">
        <img src={goldImage} alt="Gold Bullion" className="bullion-image" />
      </div>
      <div className="bullion-text-container">
        <p className="small-heading">INVESTING IN GOLD</p>
        <h2 className="title-heading">BULLION</h2>
        <p className="description-text">
          Looking to invest in precious metals or sell your unwanted gold and
          bullion? We offer a wide selection of high-quality bullion and provide
          competitive prices for your gold. Whats app us on{" "}
          <strong> +44 7833 960991</strong> or call us on{" "}
          <strong>01274 057 221</strong> for the most up-to-date live prices and
          secure your investment today.
        </p>
      </div>
    </div>
  );
};

export default HeroHome;
