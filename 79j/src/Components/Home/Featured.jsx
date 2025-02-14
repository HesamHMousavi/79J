import React from "react";
import img1 from "../../Imgs/necklaceHome.jpeg";
import img2 from "../../Imgs/braHome.jpeg";
import img3 from "../../Imgs/bangelsHome.jpeg";
import img4 from "../../Imgs/ringsHome.jpeg";
import { useNavigate } from "react-router";
import "./Featured.css";
import "../core.css";

const Featured = () => {
  const nav = useNavigate();
  return (
    <div className="max-width">
      <div className="featured">
        <h1 className="featured-title">Most Popular</h1>
        <div className="featured-con">
        <div className="feature-item">
            <img src={img2} alt="" />
            <h5>Bracelets</h5>
            <p>25 products</p>
            <button onClick={() => nav("/bracelets")}>Explore</button>
          </div>
          <div className="feature-item">
            <img src={img1} alt="" />
            <h5>Necklaces</h5>
            <p>25 products</p>
            <button onClick={() => nav("/necklaces")}>Explore</button>
          </div>
          <div className="feature-item">
            <img src={img3} alt="" />
            <h5>Bangles</h5>
            <p>25 products</p>
            <button onClick={() => nav("/bangles")}>Explore</button>
          </div>
          <div className="feature-item">
            <img src={img4} alt="" />
            <h5>Rings</h5>
            <p>25 products</p>
            <button onClick={() => nav("/rings")}>Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
