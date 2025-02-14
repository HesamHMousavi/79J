import React, { useState } from "react";
import img from "../../Imgs/scrollItem.jpeg";
import img2 from "../../Imgs/scrollItem2.jpeg";
import "./ScrollItems.css";

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
    image: img2,
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
    image: img2,
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
    image: img2,
  },
];

const ScrollingBangles = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUri) => {
    setSelectedImage(imageUri);

    const websiteUrl = window.location.origin; // Dynamically get the website URL
    const link = `https://api.whatsapp.com/send?phone=447833960991&text=I%20have%20an%20enquiry%20about%20this%20item:%20${websiteUrl}${imageUri}`;

    console.log(link);
    window.open(link, "_blank"); // Open WhatsApp link in a new tab
  };

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
                onClick={() => handleImageClick(bangle.image)} // Pass the image URL
                style={{ cursor: "pointer" }}
              />
              <p className="bangle-name">{bangle.name}</p>
              <button
                className="btn"
                onClick={() => handleImageClick(bangle.image)}
              >
                Contact us
              </button>
              {/* <p className="bangle-price">{bangle.price}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollingBangles;
