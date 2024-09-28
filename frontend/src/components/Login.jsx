import React, { useState } from 'react';
import { loginUser } from '../api/api'; // Assume this makes the API call

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
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
    const { username, password } = formData;

    try {
      const response = await loginUser(username, password);
      if (response.message === 'Invalid username or password') {
        setError('Invalid username or password');
      } else {
        setSuccess('Login successful!');
        setError('');
        // Handle storing token or redirecting user
      }
    } catch (err) {
      setError('Error logging in');
      setSuccess('');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
      {success && <p className="success-text">{success}</p>}
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default Login;
