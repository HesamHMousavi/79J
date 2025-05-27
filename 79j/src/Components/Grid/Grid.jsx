import React from "react";
import Img1 from "../../Imgs/braHome.jpeg";
import Img2 from "../../Imgs/scrollItem.jpeg";
import Img3 from "../../Imgs/scrollItem2.jpeg";
import Img4 from "../../Imgs/ringsHome.jpeg";
import Img5 from "../../Imgs/bangelsHome.jpeg";
import Img6 from "../../Imgs/necklaceHome.jpeg";
import Img7 from "../../Imgs/braHome.jpeg";
import Img8 from "../../Imgs/logo.jpeg";

const Grid = () => {
  const data = [
    { name: "Cuff Bracelet", img: Img1 },
    { name: "Gold Necklace", img: Img2 },
    { name: "Cuban Link Chain", img: Img3 },
    { name: "Danglers", img: Img4 },
    { name: "Tennis Bracelet", img: Img5 },
    { name: "Gold Band", img: Img6 },
    { name: "Cocktail Ring", img: Img7 },
    { name: "79 Special", img: Img8 },
  ];

  const handleClick = (imgSrc) => {
    // Convert the image import path into a full URL
    const fullImageUrl = `${window.location.origin}${imgSrc}`;
    // const secureImageUrl = fullImageUrl.replace(/^http:/, "https:");

    const whatsappUrl = `https://api.whatsapp.com/send?phone=447833960991&text=${encodeURIComponent(
      fullImageUrl
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="max-width">
      <div className="grid">
        {data.map((item, idx) => (
          <div className="grid-item" key={idx}>
            <img
              src={item.img}
              alt={item.name}
              onClick={() => handleClick(item.img)}
              style={{ cursor: "pointer" }}
            />
            <h3>{item.name}</h3>
            <button className="btn" onClick={() => handleClick(item.img)}>
              Contact us
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
