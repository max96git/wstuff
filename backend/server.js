const express = require('express');
const bodyParser = require('body-parser');
const sellRoutes = require('./routes/sellRoutes');
const uploadRoutes = require('./routes/upload');

const app = express();
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));  // Serve uploaded images

app.use('/api/sell', sellRoutes);
app.use('/api/upload', uploadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
