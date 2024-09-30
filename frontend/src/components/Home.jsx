import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [latestItems, setLatestItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/items');
        setLatestItems(response.data);
      } catch (err) {
        setError('Error fetching items: ' + err.message);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo">
          <h1>Hexanoid</h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/sell-limiteds">Sell Limiteds</Link></li>
            <li><Link to="/sell-accounts">Sell Accounts</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2>Buy & Sell Roblox Limiteds and Accounts</h2>
          <p>Your trusted marketplace for exclusive Roblox limited items and accounts. Start trading now!</p>
          <div className="cta-buttons">
            <Link to="/sell-limiteds" className="cta-btn">Sell Limiteds</Link>
            <Link to="/sell-accounts" className="cta-btn">Sell Accounts</Link>
          </div>
        </div>
      </section>

      <section className="latest-items">
        <h2>Latest Items</h2>
        {error ? (
          <p className="error">{error}</p>
        ) : (
          <div className="items-grid">
            {latestItems.length === 0 ? (
              <p>No items available yet.</p>
            ) : (
              latestItems.map((item) => (
                <div className="item-card" key={item.id}>
                  <h3>{item.name}</h3>
                  <p>Price: {item.price}</p>
                  <p>Seller: {item.seller}</p>
                  <Link to={`/items/${item.id}`} className="view-btn">View Details</Link>
                </div>
              ))
            )}
          </div>
        )}
      </section>

      <footer className="home-footer">
        <p>© 2024 Hexanoid. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
