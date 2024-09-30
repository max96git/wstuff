import React from 'react';

const ItemCard = ({ item }) => {
    return (
        <div className="item-card">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">View Item</a>
        </div>
    );
};

export default ItemCard;
