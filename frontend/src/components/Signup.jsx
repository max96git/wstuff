import React, { useState } from 'react';
import { signupUser } from '../api/api'; // Assume this makes the API call

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    try {
      const response = await signupUser(username, email, password);
      if (response.message === 'Username is taken') {
        setError('Username is taken');
      } else {
        setSuccess('Account created successfully!');
        setError('');
      }
    } catch (err) {
      setError('Error signing up');
      setSuccess('');
    }
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleInputChange} 
            required 
          />
          {error === 'Username is taken' && <p className="error-text">Username is taken.</p>}
        </label>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange} 
            required 
          />
        </label>
        <label>
          Password:
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleInputChange} 
            required 
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      {success && <p className="success-text">{success}</p>}
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default Signup;
