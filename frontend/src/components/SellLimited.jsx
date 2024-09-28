import React, { useState } from 'react';

function SellLimited() {
  const [robloxItemLink, setRobloxItemLink] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('robloxItemLink', robloxItemLink);
    formData.append('image', image);

    const response = await fetch('/api/sell/limited', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div>
      <h1>Sell Roblox Limited Item</h1>
      <form onSubmit={handleSubmit}>
        <label>Roblox Limited Item Link:
          <input type="url" value={robloxItemLink} onChange={(e) => setRobloxItemLink(e.target.value)} required />
        </label>
        <label>Product Image (Recommend size: 1:1):
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SellLimited;
