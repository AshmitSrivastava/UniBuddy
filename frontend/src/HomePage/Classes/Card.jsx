import React from "react";
import "./Cards.css";

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <img src={image} alt={title} className="card-image" />
    </div>
  );
};

export default Card;
