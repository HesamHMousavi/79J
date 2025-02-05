import React from "react";
import "./PremiumCollection.css";
import img from "../../Imgs/store3.jpeg";

const PremiumCollection = () => {
  return (
    <div className="premium-container ">
      <div className="text-section">
        <h2 className="title">Our Premium Collection</h2>
        <p className="description">
          Experience the epitome of luxury with our carefully curated bridal
          collection. Each piece is handcrafted to perfection, featuring the
          finest gold and precious stones.
        </p>
        <ul className="features">
          <li>
            <span className="icon"></span> Premium 18-24K Gold
          </li>
          <li>
            <span className="icon"></span> Certified Diamonds
          </li>
          <li>
            <span className="icon"></span> Lifetime Warranty
          </li>
        </ul>
      </div>
      <div className="image-section">
        <img
          src={img}
          alt="Premium Jewelry Collection"
          className="premium-image"
        />
      </div>
    </div>
  );
};

export default PremiumCollection;
