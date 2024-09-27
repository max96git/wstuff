const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/items');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect('mongodb://localhost:27017/marketplace', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);

// Real-time updates
io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('publishItem', (item) => {
        io.emit('itemPublished', item);
    });
});

server.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
