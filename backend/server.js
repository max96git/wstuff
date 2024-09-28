// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.REACT_APP_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Example Routes
app.post('/api/signup', async (req, res) => {
    // Signup logic here
    const { username, password } = req.body;
    // Check if username exists, save to DB, etc.
});

app.post('/api/login', async (req, res) => {
    // Login logic here
    const { username, password } = req.body;
    // Authenticate user, generate JWT, etc.
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
