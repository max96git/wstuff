import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SellAccounts = () => {
  const [accountLink, setAccountLink] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [cryptoAddress, setCryptoAddress] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/accounts', {
        accountLink,
        paymentMethod,
        cryptoAddress,
        amount,
      });
      navigate('/');
    } catch (error) {
      console.error('Error publishing account:', error);
    }
  };

  return (
    <div>
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
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
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
