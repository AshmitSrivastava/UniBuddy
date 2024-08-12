import React, { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="homepage-navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="search-icon">
        <i className="fa fa-search"></i>
      </div>
      <div className="cart-icon">
        <i className="fa fa-shopping-cart"></i>
      </div>

      <ul className="auth-links">
        <li>
          <a href="#">Log In</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
