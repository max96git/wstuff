import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('/api/items');
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to Hexanoid</h1>
        <p>Buy and sell Roblox limiteds and accounts with ease.</p>
      </header>

      <section className={styles.itemsSection}>
        <h2>Latest Listings</h2>
        {loading ? (
          <p>Loading items...</p>
        ) : (
          <div className={styles.itemsGrid}>
            {items.map(item => (
              <div key={item.id} className={styles.itemCard}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>Price: {item.price} USD</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
