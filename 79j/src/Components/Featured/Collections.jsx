import React from "react";
import img1 from "../../Imgs/wedding1.jpeg";
import img2 from "../../Imgs/wedding2.jpeg";
import img3 from "../../Imgs/wedding3.jpeg";
import { useNavigate } from "react-router";
import "./Collections.css";

const collections = [
  {
    title: "Rings",
    description: "Timeless designs for the perfect proposal",
    image: img1,
    link: "/rings",
    borderColor: "border-green-500",
  },
  {
    title: "Necklaces",
    description: "Statement pieces for your special day",
    image: img2,
    link: "/necklaces",
    borderColor: "border-blue-500",
  },
  {
    title: "Bangles",
    description: "Elegant touches of brilliance",
    image: img3,
    link: "/bangles",
    borderColor: "border-purple-500",
  },
];

const Collections = () => {
  const nav = useNavigate();
  return (
    <div className="featured-collections">
      <h2 className="title-1">Featured Collections</h2>
      <div className="collections-grid">
        {collections.map((item, index) => (
          <div
            key={index}
            className="collection-card"
            style={{ borderColor: item.borderColor }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="collection-image"
            />
            <h3 className="collection-title">{item.title}</h3>
            <p className="collection-description">{item.description}</p>
            <a
              href={item.link}
              className="collection-link"
              onClick={() => nav(item.link)}
            >
              Explore →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
