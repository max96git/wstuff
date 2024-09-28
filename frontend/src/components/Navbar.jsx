import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://tr.rbxcdn.com/2d3b1ae7c0a4d640fca2510826d7d0b4/420/420/Hat/Png"
          alt="Hexanoid Logo"
          className="logo"
        />
        <span className="navbar-title">Hexanoid</span>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/sell-limiteds">Sell Limiteds</Link>
        <Link to="/sell-accounts">Sell Accounts</Link>
      </div>
    </nav>
  );
};

export default Navbar;
