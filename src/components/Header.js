import React from "react";
import "../index.css";
import { Link, withRouter } from "react-router-dom";

function Header() {
  let styles = {
    color: "#FFFFFF"
  };
  let styles1 = {
    "text-align": "right"
  };
  return (
    <header className="navbar">
      <h3>Stocks and Share</h3>
      <Link style={styles} to="/about">
        About
      </Link>
      <Link style={styles} to="/feature">
        Feature
      </Link>
      <Link style={styles} to="/trader">
        Trader
      </Link>
      <Link style={styles} to="/">
        Home
      </Link>
    </header>
  );
}

export default Header;
