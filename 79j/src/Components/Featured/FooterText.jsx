import React from "react";
import "./FooterText.css";

const FooterText = () => {
  return (
    <div className="max-width">
      <div className="footer-text">
        <h1>Lab-Grown vs. Natural Diamonds</h1>
        <h3 className="mg-b">
          At 79 Jewellers, we offer both lab-grown and natural diamonds,
          allowing you to choose the perfect option for your jewellery.
        </h3>
        <h3 className="bold">Lab-Grown Diamonds</h3>
        <h3 className="mg-b">
          Lab-grown diamonds are created using advanced technology to replicate
          the natural formation process. They have the same brilliance,
          durability, and chemical composition as mined diamonds but are a more
          sustainable and cost-effective choice.
        </h3>
        <h3 className="bold">Natural Diamonds</h3>
        <h3 className="mg-b">
          Formed over millions of years beneath the Earth’s surface, natural
          diamonds are prized for their rarity and timeless appeal. Each natural
          diamond is unique, carrying its own history and character.
        </h3>
        <h3>
          No matter your choice, 79 Jewellers ensures the highest quality items.
        </h3>
      </div>
    </div>
  );
};

export default FooterText;
