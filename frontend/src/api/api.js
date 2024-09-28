import axios from 'axios';

// Base URL for your API (adjust as necessary)
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Function to handle user signup
export const signupUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        return response.data; // Returns the response data from the server
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Signup failed');
    }
};

// Function to handle user login
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data; // Returns the response data from the server
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};

// Function to check if a username is available
export const checkUsernameAvailability = async (username) => {
    try {
        const response = await axios.get(`${API_URL}/check-username/${username}`);
        return response.data; // Returns availability status
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error checking username');
    }
};

// Function to fetch the latest items
export const fetchLatestItems = async () => {
    try {
        const response = await axios.get(`${API_URL}/latest-items`);
        return response.data; // Returns the latest items
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error fetching latest items');
    }
};

// Additional API functions can be added here

