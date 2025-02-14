import React from "react";
import Img1 from "../../Imgs/braHome.jpeg";
import Img2 from "../../Imgs/bangelsHome.jpeg";
import Img3 from "../../Imgs/necklaceHome.jpeg";
import { useNavigate } from "react-router";
import "./Other.css";

const Other = ({ imgArray }) => {
  const nav = useNavigate();
  const onClick = (path) => {
    nav(path);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <h1 className="title-other">Other Collections</h1>
      <div className="other">
        <div className="max-width other-flex">
          <div className="item-other">
            <img src={Img1} alt="" />
            <h3 className="name">Bracelets</h3>
            <button className="btn" onClick={() => onClick("/bracelets")}>
              Explore
            </button>
          </div>
          <div className="item-other">
            <img src={Img3} alt="" />
            <h3 className="name">Necklaces</h3>
            <button className="btn" onClick={() => onClick("/necklaces")}>
              Explore
            </button>
          </div>
          <div className="item-other">
            <img src={Img2} alt="" />
            <h3 className="name">Rings</h3>
            <button className="btn" onClick={() => onClick("/rings")}>
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Other;
