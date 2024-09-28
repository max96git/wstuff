// netlify/functions/login.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');

const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const client = new MongoClient(MONGO_URI);

exports.handler = async function(event) {
  const { username, password } = JSON.parse(event.body);

  try {
    await client.connect();
    const db = client.db('your-database-name');
    const usersCollection = db.collection('users');

    // Check if the user exists
    const user = await usersCollection.findOne({ username });
    if (!user) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid username or password' }),
      };
    }

    // Check password
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid username or password' }),
      };
    }

    // Generate JWT token
    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Login successful', token }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error logging in' }),
    };
  } finally {
    await client.close();
  }
};
