import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Empowering Minds, Shaping Futures.</h1>
        <p>
          "Discover Your Path to Excellence—Join a Community Where Learning
          Meets Opportunity."
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>
    </div>
  );
};

export default HeroSection;
