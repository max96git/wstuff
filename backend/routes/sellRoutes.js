const express = require('express');
const moderateContent = require('../middleware/moderation');
const router = express.Router();
const multer = require('multer');

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

// Sell Limited Item
router.post('/limited', upload.single('image'), moderateContent, (req, res) => {
  const { robloxItemLink } = req.body;

  // Insert item in database logic
  res.json({ success: true, message: 'Limited item listed successfully!' });
});

module.exports = router;
