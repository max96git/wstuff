const express = require('express');
const Item = require('backend/models/Item');

const router = express.Router();

// Get all items
router.get('/', async (req, res) => {
    const items = await Item.find().populate('sellerId', 'username');
    res.json(items);
});

// Publish an item
router.post('/', async (req, res) => {
    const { name, description, price, sellerId } = req.body;
    const newItem = new Item({ name, description, price, sellerId });
    await newItem.save();
    res.status(201).json(newItem);
});

module.exports = router;
