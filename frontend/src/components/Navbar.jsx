import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Hexanoid</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/sell-limiteds">Sell Limiteds</a></li>
                <li><a href="/sell-accounts">Sell Accounts</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
