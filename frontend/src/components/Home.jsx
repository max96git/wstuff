import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SellLimiteds from './SellLimiteds';
import SellAccounts from './SellAccounts';
import Navbar from './Navbar';

const Home = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('/api/items');
        setItems(response.data);
      } catch (error) {
        setError('Error fetching items: ' + (error.response ? error.response.data : error.message));
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>Welcome to the Marketplace</h1>
      {error && <p>{error}</p>}
      <div>
        <h2>Latest Items</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <a href={item.link}>{item.name}</a> - {item.price}
            </li>
          ))}
        </ul>
      </div>
      <SellLimiteds />
      <SellAccounts />
    </div>
  );
};

export default Home;
