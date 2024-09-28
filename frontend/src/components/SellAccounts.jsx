import React, { useState } from 'react';
import axios from 'axios';

const SellAccounts = () => {
    const [accountLink, setAccountLink] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('paypal');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newItem = {
            link: accountLink,
            method: paymentMethod,
        };

        try {
            // Make an API call to submit the sold item
            await axios.post('/api/sell-account', newItem);
            // Optionally clear the form
            setAccountLink('');
            setPaymentMethod('paypal');
        } catch (error) {
            console.error('Error submitting sold account:', error);
        }
    };

    return (
        <div>
            <h2>Sell Accounts</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Roblox Account Link"
                    value={accountLink}
                    onChange={(e) => setAccountLink(e.target.value)}
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

export default SellAccounts;
