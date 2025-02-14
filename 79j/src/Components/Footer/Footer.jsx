import React from "react";
import { FaInstagram, FaSnapchatGhost } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container max-width">
        {/* Follow Us Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.tiktok.com/@79jewellers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="icon" />
            </a>
            <a
              href="https://www.instagram.com/79jewellers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://www.snapchat.com/add/seven9jewellers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSnapchatGhost className="icon" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>241 Legrams Ln, Bradford BD7 2EJ</p>
          <p>Email: enquiries@79jewellers.com</p>
          <p>Phone: +44 7833 960991</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/featured">Featured</Link>
            </li>
            <li>
              <Link to="/necklaces">Necklaces</Link>
            </li>
            <li>
              <Link to="/bracelets">Bracelets</Link>
            </li>
            <li>
              <Link to="/rings">Rings</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} 79 Jewellers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
