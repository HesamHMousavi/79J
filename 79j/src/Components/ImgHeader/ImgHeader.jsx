import React from "react";
import "./ImgHeader.css";

const ImgHeader = ({ img }) => {
  return (
    <div className="img-header">
        <div className="overlay-rings"></div>
      <img src={img} alt="" />
    </div>
  );
};

export default ImgHeader;
