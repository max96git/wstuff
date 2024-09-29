import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Assuming you use react-router-dom for navigation

const Home = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the latest items from the server
    const fetchItems = async () => {
      try {
        const response = await axios.get('/api/items');
        setItems(response.data);
      } catch (error) {
        setError(`Error fetching items: ${error}`);
      }
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
      <div className="actions">
        <Link to="/sell-limiteds">
          <button>Publish Limited</button>
        </Link>
        <Link to="/sell-accounts">
          <button>Publish Account</button>
        </Link>
      </div>
      {error ? (
        <div>{error}</div>
      ) : (
        <div className="items-list">
          {items.map(item => (
            <div key={item._id} className="item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
