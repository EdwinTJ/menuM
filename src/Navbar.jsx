// Navbar.js
import React from "react";
import logo from "./assets/react.svg"; // Adjust the path accordingly

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Restaurant Logo" className="navbar-logo" />
        <h1 className="navbar-title">Restaurant</h1>
      </div>
    </nav>
  );
};

export default Navbar;
