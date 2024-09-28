// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Check if username is taken
router.get('/check-username', async (req, res) => {
    const { username } = req.query;
    const user = await User.findOne({ username });
    return res.json({ exists: user ? true : false });
});

// Sign up route
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: 'Invalid username or password.' });
        
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(400).json({ message: 'Invalid username or password.' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, message: 'Login successful!' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
