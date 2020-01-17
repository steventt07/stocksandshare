import React from "react";
import "../index.css";
import { Link, withRouter } from "react-router-dom";

function Header() {
  let styles = {
    "text-decoration": "none",
    color: "#FFFFFF",
    padding: "5px"
    // "margin-left": "10px"
  };
  let home_styles = {
    "text-decoration": "none",
    color: "#FFFFFF",
    padding: "0",
    "padding-right": "20%",
    "margin-left": "10px"

    // "margin-left": "10px"
  };
  return (
    <header className="navbar">
      <Link style={home_styles} to="/">
        Stocks and Share
      </Link>
      <Link style={styles} to="/about">
        About
      </Link>
      <Link style={styles} to="/feature">
        Feature
      </Link>
      <Link style={styles} to="/trader">
        Trader
      </Link>
      <Link style={styles} to="/learn">
        Learn
      </Link>
    </header>
  );
}

export default Header;
