import React, { useState } from 'react';
import axios from 'axios';

const SellLimiteds = () => {
  const [itemLink, setItemLink] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle the submission logic here
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
        {paymentMethod === 'crypto' && (
          <>
            <input
              type="text"
              placeholder="Wallet Address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              required
            />
            {/* Add additional fields for crypto type and amount if needed */}
          </>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SellLimiteds;
