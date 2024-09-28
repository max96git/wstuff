// src/api/api.js
const API_URL = process.env.REACT_APP_API_URL;
import axios from 'axios';

export const signupUser = async (userData) => {
    try {
        const response = await axios.post('/api/signup', userData);
        return response.data; // Return the response data if needed
    } catch (error) {
        throw new Error(error.response.data.message || 'Signup failed');
    }
};

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return await response.json();
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Failed to log in');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
