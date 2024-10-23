import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src="logo.png" alt="Logo" className="logo" to="/" />
      <nav className="menu">
        <Link to="/">Home</Link>
        <span className="separator">|</span>
        <Link to="/about-us">About</Link>
        <span className="separator">|</span>
        <Link to="/privacy-policy">Policy</Link>
        <span className="separator">|</span>
        <Link to="/t&c">T&C</Link>
        <span className="separator">|</span>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
