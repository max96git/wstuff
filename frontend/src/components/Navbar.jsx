import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Modern CSS for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Hexanoid</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/limiteds">Limiteds</Link></li>
        <li><Link to="/accounts">Accounts</Link></li>
        <li><Link to="/sell">Sell</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
