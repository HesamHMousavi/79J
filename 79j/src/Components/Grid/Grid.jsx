import React from "react";
import Img1 from "../../Imgs/bangal.png";
import Img2 from "../../Imgs/bra-long.png";
import Img3 from "../../Imgs/neck.jpg";
import Img4 from "../../Imgs/rings.jpg";
import Img5 from "../../Imgs/land.png";
import Img6 from "../../Imgs/landing.jpg";
import Img7 from "../../Imgs/landing2.jpg";
import Img8 from "../../Imgs/logo.jpeg";

const Grid = ({ imgArray }) => {
  const data = [
    { name: "Item1", img: Img1 },
    { name: "Item2", img: Img2 },
    { name: "item3", img: Img3 },
    { name: "item4", img: Img4 },
    { name: "item5", img: Img5 },
    { name: "item6", img: Img6 },
    { name: "item7", img: Img7 },
    { name: "item8", img: Img8 },
    { name: "Item1", img: Img1 },
    { name: "Item2", img: Img2 },
    { name: "item3", img: Img3 },
    { name: "item4", img: Img4 },
    { name: "item5", img: Img5 },
    { name: "item6", img: Img6 },
    { name: "item7", img: Img7 },
    { name: "item8", img: Img8 },
    { name: "Item1", img: Img1 },
    { name: "Item2", img: Img2 },
    { name: "item3", img: Img3 },
    { name: "item4", img: Img4 },
    { name: "item5", img: Img5 },
    { name: "item6", img: Img6 },
    { name: "item7", img: Img7 },
    { name: "item8", img: Img8 },
  ];
  return (
    <div className="grid max-width">
      {data.map((item, idx) => (
        <div className="grid-item" key={idx}>
          <img src={item.img} alt="" />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Grid;
