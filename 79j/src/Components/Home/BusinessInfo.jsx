import React from "react";
import "./BusinessInfo.css";
import logo from "../../Imgs/logo.jpeg"; // Replace with actual logo path

const BusinessInfo = () => {
  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/dir//241+Legrams+Ln,+Bradford+BD7+2EJ/@53.7974379,-1.8249855,12.92z/data=!4m8!4m7!1m0!1m5!1m1!1s0x487be700330ed551:0xadbaa331f82673fe!2m2!1d-1.7856999!2d53.7893376?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  return (
    <div className=" bg-darker">
      <div className="business-container max-width">
        <div className="business-details">
          <h2>79 JEWELLERS</h2>
          <p className="address"> 241 Legrams Ln, Bradford BD7 2EJ</p>

          <p>Mon - Sun, 11am - 7pm</p>

          <button className="directions-btn" onClick={openGoogleMaps}>
            DIRECTIONS
          </button>
        </div>

        {/* Right Side: Logo */}
        <div className="business-logo">
          <img src={logo} alt="Nashad Jewellers Logo" />
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
