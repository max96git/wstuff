const mongoose = require('mongoose');

const soldItemSchema = new mongoose.Schema({
    link: String,
    method: String,
    createdAt: { type: Date, default: Date.now }, // Automatically set creation time
});

module.exports = mongoose.model('SoldItem', soldItemSchema);
