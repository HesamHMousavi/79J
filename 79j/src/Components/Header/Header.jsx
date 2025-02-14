import React, { useState, useEffect } from "react";
import logo from "../../Imgs/logo.jpeg";
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

  const goToPage = (link) => {
    nav(link);
    setMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="max-width flex-between">
        <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`links `}>
          <div
            className={`link-item ${
              location.pathname === "/" ? "selected" : ""
            }`}
            onClick={() => goToPage("/")}
          >
            <p>Home</p>
          </div>
          <div
            className={`link-item ${
              location.pathname === "/bangles" ? "selected" : ""
            }`}
            onClick={() => goToPage("/bangles")}
          >
            <p>Bangles</p>
          </div>
          <div
            className={`link-item ${
              location.pathname === "/bracelets" ? "selected" : ""
            }`}
            onClick={() => goToPage("/bracelets")}
          >
            <p>Bracelets</p>
          </div>
        </div>
        <div className="img-con">
          <img src={logo} alt="Logo" onClick={() => goToPage("/")} />
        </div>
        <div className={`links`}>
          <div
            className={`link-item ${
              location.pathname === "/necklaces" ? "selected" : ""
            }`}
            onClick={() => goToPage("/necklaces")}
          >
            <p>Necklaces</p>
          </div>
          <div
            className={`link-item ${
              location.pathname === "/rings" ? "selected" : ""
            }`}
            onClick={() => goToPage("/rings")}
          >
            <p>Rings</p>
          </div>
          <div
            className={`link-item ${
              location.pathname === "/featured" ? "selected" : ""
            }`}
            onClick={() => nav("/featured")}
          >
            <p>Diamonds & Bridals</p>
          </div>
        </div>

        <div className={`${menuOpen ? " links active" : "display-none"}`}>
          <div
            className={`link-item ${
              location.pathname === "/" ? "selected" : ""
            }`}
            onClick={() => goToPage("/")}
          >
            <p>Home</p>
          </div>
          <div
            className={`link-item ${
              location.pathname === "/bangles" ? "selected" : ""
            }`}
            onClick={() => goToPage("/bangles")}
          >
            <p>Bangles</p>
          </div>
          <div
            className={`link-item ${
              location.pathname === "/bracelets" ? "selected" : ""
            }`}
            onClick={() => goToPage("/bracelets")}
          >
            <p>Bracelets</p>
          </div>
          <div
            className={`link-item ${
              location.pathname === "/necklaces" ? "selected" : ""
            }`}
            onClick={() => goToPage("/necklaces")}
          >
            <p>Necklaces</p>
          </div>
          <div
            className={`link-item ${
              location.pathname === "/rings" ? "selected" : ""
            }`}
            onClick={() => goToPage("/rings")}
          >
            <p>Rings</p>
          </div>
          <div
            className={`link-item ${
              location.pathname === "/featured" ? "selected" : ""
            }`}
            onClick={() => goToPage("/featured")}
          >
            <p>Diamonds & Bridals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
