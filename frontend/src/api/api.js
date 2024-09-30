import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust based on your backend setup

export const fetchItems = async () => {
    const response = await axios.get(`${API_URL}/items`);
    return response.data;
};

export const publishItem = async (item) => {
    const response = await axios.post(`${API_URL}/items`, item);
    return response.data;
};
