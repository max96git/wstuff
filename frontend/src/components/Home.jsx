// src/components/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Change to useNavigate
import './Home.css'; // Import your CSS

const Home = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleJoinNow = () => {
        navigate('/signup'); // Use navigate to go to the signup page
    };

    return (
        <div className="home-container">
            <header className="hero-section">
                <h1>Welcome to Hexanoid</h1>
                <p>Your marketplace for limiteds and accounts</p>
                <button onClick={handleJoinNow} className="join-button">Join Now</button>
            </header>

            <section className="featured-items">
                <h2>Featured Items</h2>
                <div className="item-grid">
                    {/* Map through featured items */}
                </div>
            </section>

            <footer>
                <p>Join our community and start selling today!</p>
            </footer>
        </div>
    );
};

export default Home;
