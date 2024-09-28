// src/components/Signup.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const handleUsernameChange = async (e) => {
        const { value } = e.target;
        setUsername(value);

        try {
            const response = await axios.post('/api/auth/check-username', { username: value });
            setUsernameError(response.data.message === 'Username is available.' ? '' : 'Username is taken.');
        } catch (error) {
            setUsernameError('Error checking username.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (usernameError) return; // Prevent submission if username is invalid

        try {
            await axios.post('/api/auth/signup', { username, password });
            alert('User created successfully!');
        } catch (error) {
            alert('Error creating user.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
            />
            {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;
