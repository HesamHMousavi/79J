import React from "react";
import "./ScrollItems.css";
import img from "../../Imgs/bangal.png";

const bangles = [
  {
    name: "Indus Bangle 5.4g",
    price: "£535.00",
    status: "Sold out",
    image: img,
  },
  {
    name: "Koram Bangle 6.5g",
    price: "£645.00",
    status: "Sold out",
    image: img,
  },
  {
    name: "Alaya Bangle 5.5g",
    price: "£545.00",
    status: "Sold out",
    image: img,
  },
  {
    name: "Spike Bangle 8.4g",
    price: "£830.00",
    status: "Sold out",
    image: img,
  },
  {
    name: "Spike Bangle 8.4g",
    price: "£830.00",
    status: "Sold out",
    image: img,
  },
  {
    name: "Spike Bangle 8.4g",
    price: "£830.00",
    status: "Sold out",
    image: img,
  },
];

const ScrollingBangles = () => {
  return (
    <>
      <h1 className="title-bangle">BANGLES</h1>
      <div className="scrolling-container max-width">
        <div className="scrolling-wrapper">
          {bangles.map((bangle, index) => (
            <div key={index} className="bangle-card">
              <img
                src={bangle.image}
                alt={bangle.name}
                className="bangle-image"
              />
              <p className="bangle-name">{bangle.name}</p>
              <p className="bangle-price">{bangle.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollingBangles;
