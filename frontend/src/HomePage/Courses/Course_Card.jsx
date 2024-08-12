import React from "react";
import "./Course_Card.css";

const Course_Card = ({ title, description, image }) => {
  return (
    <div className="course-card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <img src={image} alt={title} className="card-image" />
    </div>
  );
};

export default Course_Card;
