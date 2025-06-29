import React, { useState, useEffect } from "react";
import "./TestimonialSlider.css";

const testimonials = [
  {
    text: "Stunning designs in all jewellery pieces. Haven't seen gold jewellery like this anywhere else. Service was fantastic, very happy with my bracelet. Will be visiting again.",
    author: "Bushra Khan",
    stars: 5,
  },
  {
    text: "Excellent quality and customer service. The craftsmanship of the jewellery is outstanding. Highly recommend!",
    author: "Alisha Ali",
    stars: 5,
  },
  {
    text: "A wonderful experience shopping here. The designs are unique, and the staff is very knowledgeable and helpful.",
    author: "Mohammed Islam.",
    stars: 5,
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setFade(true); // Start fade-in
      }, 500); // Match animation duration
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-container">
      <p className="subheading">FROM THE PEOPLE</p>

      {/* Wrap both stars and content inside the fading div */}
      <div className={`testimonial-content ${fade ? "fade-in" : "fade-out"}`}>
        <div className="stars">
          {"★".repeat(testimonials[index].stars)}
          {"☆".repeat(5 - testimonials[index].stars)}
        </div>
        <p className="testimonial-text">"{testimonials[index].text}"</p>
        <p className="author">— {testimonials[index].author}</p>
      </div>

      {/* Navigation Arrows */}
      <button
        className="arrow left"
        onClick={() =>
          setIndex((index - 1 + testimonials.length) % testimonials.length)
        }
      >
        ❮
      </button>
      <button
        className="arrow right"
        onClick={() => setIndex((index + 1) % testimonials.length)}
      >
        ❯
      </button>
    </div>
  );
};

export default TestimonialSlider;
