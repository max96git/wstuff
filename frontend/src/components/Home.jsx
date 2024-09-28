import React, { useEffect, useState } from 'react';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Function to fetch latest sold items
    const fetchItems = async () => {
      try {
        const response = await fetch('/api/latest-sold-items'); // Adjust the API endpoint as necessary
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems(); // Initial fetch

    // Set up interval for periodic fetching
    const intervalId = setInterval(fetchItems, 5000); // Poll every 5 seconds
    return () => clearInterval(intervalId); // Cleanup
  }, []);

  return (
    <div>
      <h2>Latest Sold Items</h2>
      {items.length === 0 ? (
        <p>No items sold yet. (Updates every 5 seconds)</p>
      ) : (
        items.map(item => (
          <div key={item.id}>
            <p>{item.link} - {item.method}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
