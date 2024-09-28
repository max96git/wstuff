const express = require('express');
const router = express.Router();
const SoldItem = require('../models/SoldItem'); // Import your Mongoose model

// Route to get the latest sold items
router.get('/api/latest-sold-items', async (req, res) => {
    try {
        const items = await SoldItem.find().sort({ createdAt: -1 }).limit(10); // Fetch the latest 10 sold items
        res.json(items);
    } catch (error) {
        console.error('Error fetching sold items:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
