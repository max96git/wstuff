import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';  // Add custom styling for modern look
import Navbar from './Navbar';

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/items')
      .then(response => {
        setItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(`Error fetching items: ${error.message}`);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Hexanoid</h1>
          <p className="hero-subtitle">Buy and sell Roblox Limiteds and accounts with ease</p>
          <button className="cta-button">Explore the Market</button>
        </div>
      </header>

      <section className="latest-items">
        <h2>Latest Listings</h2>
        {loading ? (
          <p>Loading items...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="items-grid">
            {items.map(item => (
              <div key={item.id} className="item-card">
                <img src={item.image} alt={item.name} className="item-image"/>
                <h3 className="item-title">{item.name}</h3>
                <p className="item-price">${item.price}</p>
                <button className="buy-button">Buy</button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
