import React, { useEffect, useState } from 'react';
import { fetchItems } from '../api/api';
import ItemCard from '../components/ItemCard';

const Home = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getItems = async () => {
            try {
                const fetchedItems = await fetchItems();
                setItems(fetchedItems);
            } catch (error) {
                console.error('Error fetching items:', error);
            } finally {
                setLoading(false);
            }
        };

        getItems();
    }, []);

    return (
        <div>
            <h1>Welcome to Hexanoid</h1>
            <h2>Available Items</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="item-list">
                    {items.map((item) => (
                        <ItemCard key={item._id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
