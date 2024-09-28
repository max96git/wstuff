// src/components/Home.jsx
import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
    return (
        <div className="home-container">
            <header className="hero-section">
                <h1 className="hero-title">Welcome to Hexanoid</h1>
                <p className="hero-subtitle">Your go-to marketplace for limited items and accounts</p>
                <button className="cta-button">Get Started</button>
            </header>

            <section className="features-section">
                <h2 className="section-title">Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Browse Limiteds</h3>
                        <p>Explore exclusive limited items available for purchase.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Account Marketplace</h3>
                        <p>Buy and sell accounts with ease and security.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Secure Transactions</h3>
                        <p>Enjoy peace of mind with secure payment options.</p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>© 2024 Hexanoid. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
