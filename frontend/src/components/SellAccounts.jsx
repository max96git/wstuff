import React, { useState } from 'react';
import axios from 'axios';

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
    try {
      const response = await axios.post('/api/sell-accounts', {
        accountLink,
        paymentMethod,
        cryptoAddress,
        amount,
      });
      // Handle success response
      console.log('Account published:', response.data);
    } catch (error) {
      console.error('Error publishing account:', error);
    }
  };

  return (
    <div className="sell-accounts">
      <h2>Sell Accounts</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Roblox Account Link"
          value={accountLink}
          onChange={(e) => setAccountLink(e.target.value)}
          required
        />
        <select value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="paypal">PayPal</option>
          <option value="crypto">Crypto</option>
        </select>
        {paymentMethod === 'crypto' && (
          <>
            <input
              type="text"
              placeholder="Crypto Wallet Address"
              value={cryptoAddress}
              onChange={(e) => setCryptoAddress(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SellAccounts;
