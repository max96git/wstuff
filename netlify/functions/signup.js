// netlify/functions/signup.js
const bcrypt = require('bcryptjs');
const { MongoClient } = require('mongodb');

const MONGO_URI = process.env.MONGO_URI;
const client = new MongoClient(MONGO_URI);

exports.handler = async function(event) {
  const { username, email, password } = JSON.parse(event.body);

  try {
    await client.connect();
    const db = client.db('your-database-name');
    const usersCollection = db.collection('users');

    // Check if username exists
    const userExists = await usersCollection.findOne({ username });
    if (userExists) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Username is taken' }),
      };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const newUser = {
      username,
      email,
      password: hashedPassword,
    };
    await usersCollection.insertOne(newUser);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'User created successfully' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error creating user' }),
    };
  } finally {
    await client.close();
  }
};
