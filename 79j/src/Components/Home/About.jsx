import React from "react";
import "./About.css";
import jewellerImage1 from "../../Imgs/store2.jpeg";
import jewellerImage2 from "../../Imgs/79shop2.jpeg";
import jewellerImage3 from "../../Imgs/store.jpeg";

const About = () => {
  return (
    <div className="legacy-container">
      <h1 className="legacy-title">
        Element 79 A Legacy in <span className="gold-text">Gold</span>
      </h1>

      <div className="legacy-content">
        {/* Text Frame */}
        <div className="frame gold-frame">
          <p>
            <span className="start-word">For</span> over 30 years, gold has been
            more than just a business for our family—it’s been a passion, a
            craft, and a tradition passed down through generations.
          </p>
          <p>
            It all started with our first gold shop, a place where quality and
            trust came before anything else. Over the years, we built a
            reputation for fine craftsmanship and exceptional service, serving
            generations of families looking for timeless jewellery.
          </p>
          <p>
            When circumstances led to the shop closing, it was more than just a
            loss of business—it felt like the end of an era.
          </p>
          <p>
            But some traditions are too precious to fade. With the same
            dedication and values that built our name, we have reopened with a
            renewed vision—bringing luxury, heritage, and modern elegance
            together under one roof.
          </p>
          <p>
            At 79 Jewellers, we honour our past while embracing the future,
            offering carefully crafted 22K gold and diamond jewellery that
            reflects both tradition and innovation.
          </p>
          <p>
            This isn’t just jewellery—it’s history, craftsmanship, and a legacy
            reborn.
          </p>
        </div>

        <div className="image-grid">
          <div className="">
            <img src={jewellerImage1} alt="Crafting Jewellery" />
          </div>
          <div className="">
            <img src={jewellerImage3} alt="Finishing Touches on Jewellery" />
          </div>
          <div className="">
            <img src={jewellerImage2} alt="Finishing Touches on Jewellery" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
