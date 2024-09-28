import React, { useState } from 'react';
import axios from 'axios';

const SellAccounts = () => {
  const [accountLink, setAccountLink] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accountLink || !price || !description || !image) {
      setErrorMessage('Please fill out all fields and upload an image.');
      return;
    }

    const formData = new FormData();
    formData.append('accountLink', accountLink);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/sell/accounts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data.success) {
        setSuccessMessage('Account listed successfully!');
        setErrorMessage('');
        setAccountLink('');
        setPrice('');
        setDescription('');
        setImage(null);
      }
    } catch (error) {
      setErrorMessage('An error occurred while listing the account.');
      setSuccessMessage('');
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="sell-accounts-container">
      <h2>Sell a Roblox Account</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="accountLink">Roblox Account Link:</label>
          <input
            type="text"
            id="accountLink"
            value={accountLink}
            onChange={(e) => setAccountLink(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price (in USD):</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Upload Image (Recommend size: 1:1):</label>
          <input type="file" id="image" onChange={handleImageChange} required />
        </div>

        <button type="submit" className="submit-button">
          List Account for Sale
        </button>
      </form>
    </div>
  );
};

export default SellAccounts;
