// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="https://tr.rbxcdn.com/2d3b1ae7c0a4d640fca2510826d7d0b4/420/420/Hat/Png" alt="Hexanoid Logo" />
                <span>Hexanoid</span>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/sell-limiteds">Sell Limiteds</Link>
                <Link to="/sell-accounts">Sell Accounts</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
        </nav>
    );
};

export default Navbar;
