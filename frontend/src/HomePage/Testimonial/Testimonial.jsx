// src/components/Testimonial.jsx
import React from "react";
import "./Testimonial.css";

const Testimonial = ({ image, text, isImageLeft }) => {
  return (
    <div
      className={`testimonial ${isImageLeft ? "image-left" : "image-right"}`}
    >
      <div
        className={`testimonial-content ${
          isImageLeft ? "content-left" : "content-right"
        }`}
      >
        <img src={image} alt="User" className="testimonial-image" />
        <p className="testimonial-text">{text}</p>
      </div>
    </div>
  );
};

export default Testimonial;
