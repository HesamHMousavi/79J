import React, { useState, useEffect } from "react";
import logo from "../../Imgs/logo2.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import "../core.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleBodyClick = (e) => {
      if (!e.target.closest(".header")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleBodyClick);
    return () => {
      document.removeEventListener("click", handleBodyClick);
    };
  }, []);

  return (
    <div className="header">
      <div className="max-width flex-between">
        <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`links ${menuOpen ? "active" : ""}`}>
          <div
            className={`link-item ${
              location.pathname === "/bracelets" ? "selected" : ""
            }`}
            onClick={() => nav("/bracelets")}
          >
            <p>Bracelets</p>
          </div>
          <div
            className={`link-item ${
              location.pathname === "/necklaces" ? "selected" : ""
            }`}
            onClick={() => nav("/necklaces")}
          >
            <p>Necklaces</p>
          </div>
          <div
            className={`link-item ${
              location.pathname === "/rings" ? "selected" : ""
            }`}
            onClick={() => nav("/rings")}
          >
            <p>Rings</p>
          </div>
          <div
            className={`link-item ${
              location.pathname === "/bangles" ? "selected" : ""
            }`}
            onClick={() => nav("/bangles")}
          >
            <p>Bangles</p>
          </div>
          <div
            className={`link-item ${
              location.pathname === "/featured" ? "selected" : ""
            }`}
            onClick={() => nav("/featured")}
          >
            <p>Featured</p>
          </div>
          <div
            className={`link-item ${
              location.pathname === "/" ? "selected" : ""
            }`}
            onClick={() => nav("/")}
          >
            <p>Home</p>
          </div>
        </div>
        <div className="img-con">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
