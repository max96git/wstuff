import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('/api/items'); // Adjust the API endpoint accordingly
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>Welcome to Our Marketplace</h1>
      <button>
        <Link to="/sell-limiteds">Publish Limiteds</Link>
      </button>
      <button>
        <Link to="/sell-accounts">Publish Accounts</Link>
      </button>
      
      <h2>Latest Listings</h2>
      <ul>
        {items.length > 0 ? (
          items.map(item => (
            <li key={item.id}>
              Item: {item.name} | Price: {item.price}
            </li>
          ))
        ) : (
          <li>No items available.</li>
        )}
      </ul>
    </div>
  );
};

export default Home;
