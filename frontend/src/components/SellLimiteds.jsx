import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SellLimiteds = () => {
  const [itemLink, setItemLink] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/limiteds', {
        itemLink,
        paymentMethod,
        walletAddress,
        amount
      });
      navigate('/');
    } catch (error) {
      console.error('Error publishing limited:', error);
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
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <select onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="paypal">PayPal</option>
          <option value="crypto">Crypto</option>
        </select>
        {paymentMethod === 'crypto' && (
          <>
            <input
              type="text"
              placeholder="Wallet Address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              required
            />
          </>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SellLimiteds;
