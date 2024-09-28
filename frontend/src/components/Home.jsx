import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchLatestItems } from '../api/api'; // Import your API function to fetch latest items

const Home = () => {
    const [latestItems, setLatestItems] = useState([]);

    useEffect(() => {
        const getLatestItems = async () => {
            const items = await fetchLatestItems();
            setLatestItems(items);
        };

        getLatestItems();
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Welcome to the Marketplace</h1>

            <div className="button-container">
                <Link to="/sell-limiteds">
                    <button className="publish-button">Publish Limited</button>
                </Link>
                <Link to="/sell-accounts">
                    <button className="publish-button">Publish Account</button>
                </Link>
            </div>

            <div className="latest-items">
                <h2>Latest Items</h2>
                {latestItems.length > 0 ? (
                    <ul>
                        {latestItems.map(item => (
                            <li key={item.id}>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No items available.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
