import React from "react";
import { useNavigate } from "react-router";
import "./ImgPre.css";

const ImgPre = ({ img, name, link }) => {
  const nav = useNavigate();
  return (
    <div
      className="img-pre"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="overlay">
        <p>EXPLORE THE</p>
        <h1>{name}</h1>
        <button onClick={() => nav(link)}>Explore</button>
      </div>
    </div>
  );
};

export default ImgPre;
