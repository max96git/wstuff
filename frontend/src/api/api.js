const express = require('express');
const router = express.Router();
const LimitedItem = require('../models/LimitedItem');
const Account = require('../models/Account');

// Route to get all items (limiteds and accounts)
router.get('/items', async (req, res) => {
  try {
    const limiteds = await LimitedItem.find();
    const accounts = await Account.find();
    const items = [...limiteds, ...accounts];
    res.json(items);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Route to publish a limited
router.post('/limiteds', async (req, res) => {
  const { itemLink, paymentMethod, walletAddress, amount } = req.body;
  try {
    const newLimited = new LimitedItem({
      itemLink,
      paymentMethod,
      walletAddress,
      amount,
    });
    await newLimited.save();
    res.status(201).json(newLimited);
  } catch (error) {
    res.status(500).send('Error selling limited');
  }
});

// Route to publish an account
router.post('/accounts', async (req, res) => {
  const { accountLink, paymentMethod, cryptoAddress, amount } = req.body;
  try {
    const newAccount = new Account({
      accountLink,
      paymentMethod,
      cryptoAddress,
      amount,
    });
    await newAccount.save();
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).send('Error selling account');
  }
});

module.exports = router;
