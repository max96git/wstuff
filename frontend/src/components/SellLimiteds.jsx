import React, { useState } from 'react';
import axios from 'axios';

const SellLimiteds = () => {
    const [itemLink, setItemLink] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('paypal');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newItem = {
            link: itemLink,
            method: paymentMethod,
        };

        try {
            // Make an API call to submit the sold item
            await axios.post('/api/sell-limited', newItem);
            // Optionally clear the form
            setItemLink('');
            setPaymentMethod('paypal');
        } catch (error) {
            console.error('Error submitting sold item:', error);
        }
    };

    return (
        <div>
            <h2>Sell Limited Items</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Roblox Limited Item Link"
                    value={itemLink}
                    onChange={(e) => setItemLink(e.target.value)}
                    required
                />
                <select onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option value="paypal">PayPal</option>
                    <option value="crypto">Crypto</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SellLimiteds;
