const express = require('express');
const { createItem, getItems } = require('../controllers/itemController');

const router = express.Router();

router.post('/items', createItem);
router.get('/items', getItems);

module.exports = router;
