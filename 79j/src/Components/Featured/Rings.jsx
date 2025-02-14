import React from "react";
import img from "../../Imgs/engRings.jpg";
import "./Rings.css";

const Rings = () => {
  return (
    <div className="max-width">
      <div className="rings">
        <h1>Create your perfect piece</h1>
        <h3 className="mg-b no-it">
          Whatsapp us on <span className="bold">07833 960 991</span> for a
          consultation!
        </h3>
        <h3>
          At 79 Jewellers, we specialise in crafting custom diamond jewellery
          that’s made just for you. Whether you have a design in mind or need
          inspiration, we can create beautifully handcrafted rings, necklaces,
          bangles, earrings, and more using natural or lab-grown diamonds. With
          attention to detail, we ensure each piece is as unique as you are. Let
          us help you bring your vision to life with jewellery that’s timeless,
          and truly personal.
        </h3>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Rings;
