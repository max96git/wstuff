import React, { useState } from 'react';
import { publishAccount } from '../api/api';

const SellAccounts = () => {
    const [paymentMethod, setPaymentMethod] = useState('paypal');
    const [accountLink, setAccountLink] = useState('');
    const [cryptoAddress, setCryptoAddress] = useState('');
    const [amount, setAmount] = useState('');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const accountData = { accountLink, paymentMethod, cryptoAddress, amount };
        try {
            const result = await publishAccount(accountData);
            console.log(result); // Handle success (e.g., show a message or update state)
        } catch (error) {
            console.error("Error publishing account:", error);
        }
    };

    return (
        <div className="sell-accounts">
            <h2>Sell Accounts</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="accountLink">Roblox Account Link:</label>
                    <input
                        type="text"
                        id="accountLink"
                        value={accountLink}
                        onChange={(e) => setAccountLink(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Payment Method:</label>
                    <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                        <option value="paypal">PayPal</option>
                        <option value="crypto">Crypto</option>
                    </select>
                </div>
                {paymentMethod === 'crypto' && (
                    <>
                        <div>
                            <label htmlFor="cryptoAddress">Crypto Wallet Address:</label>
                            <input
                                type="text"
                                id="cryptoAddress"
                                value={cryptoAddress}
                                onChange={(e) => setCryptoAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="amount">Amount:</label>
                            <input
                                type="number"
                                id="amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            />
                        </div>
                    </>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SellAccounts;
