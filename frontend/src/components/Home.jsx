import React, { useEffect, useState } from 'react';
import { fetchLatestItems } from '../api/api';
import SellLimiteds from './SellLimiteds';
import SellAccounts from './SellAccounts';

const Home = () => {
    const [latestItems, setLatestItems] = useState([]);

    const loadLatestItems = async () => {
        try {
            const items = await fetchLatestItems();
            setLatestItems(items);
        } catch (error) {
            console.error("Error fetching latest items:", error);
        }
    };

    useEffect(() => {
        loadLatestItems();
    }, []);

    return (
        <div>
            <h1>Welcome to the Marketplace</h1>
            <button onClick={() => /* Logic to open SellLimiteds */}>
                Publish Limited Item
            </button>
            <button onClick={() => /* Logic to open SellAccounts */}>
                Publish Account
            </button>
            <h2>Latest Items</h2>
            <ul>
                {latestItems.map((item) => (
                    <li key={item.id}>
                        {item.itemLink || item.accountLink} - {item.paymentMethod}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
