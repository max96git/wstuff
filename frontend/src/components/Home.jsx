import React, { useEffect, useState } from 'react';

const Home = () => {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        try {
            const response = await fetch('/api/latest-sold-items');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div>
            <h1>Latest Sold Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item._id}>
                        {item.link} - {item.method}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
