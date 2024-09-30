const Item = require('../models/Item');

exports.createItem = async (req, res) => {
    const { name, price, link } = req.body;
    const newItem = new Item({ name, price, link });
    await newItem.save();
    res.status(201).json(newItem);
};

exports.getItems = async (req, res) => {
    const items = await Item.find();
    res.json(items);
};
