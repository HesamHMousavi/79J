import React from "react";
import Img1 from "../../Imgs/braHome.jpeg";
import Img2 from "../../Imgs/scrollItem.jpeg";
import Img3 from "../../Imgs/scrollItem2.jpeg";
import Img4 from "../../Imgs/ringsHome.jpeg";
import Img5 from "../../Imgs/bangelsHome.jpeg";
import Img6 from "../../Imgs/necklaceHome.jpeg";
import Img7 from "../../Imgs/braHome.jpeg";
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
    <div className="max-width">
      <div className="grid">
        {data.map((item, idx) => (
          <div className="grid-item" key={idx}>
            <img src={item.img} alt="" />
            <h3>{item.name}</h3>
            <button className="btn">Contact us</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
