const bannedWords = ['nigger', 'nigga'];

function moderateContent(req, res, next) {
  const { robloxItemLink } = req.body;
  const combinedContent = `${robloxItemLink || ''}`;

  const containsBannedWords = bannedWords.some(word => combinedContent.toLowerCase().includes(word));

  if (containsBannedWords) {
    return res.status(400).json({ success: false, message: 'Inappropriate content detected' });
  }

  next();
}

module.exports = moderateContent;
