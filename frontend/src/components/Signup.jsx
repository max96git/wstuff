// src/components/Signup.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const handleUsernameChange = async (e) => {
        const value = e.target.value;
        setUsername(value);
        
        // Check if username is available
        if (value) {
            try {
                const response = await axios.get(`/api/check-username?username=${value}`);
                setUsernameError(response.data.exists ? 'Username is taken.' : '');
            } catch (err) {
                console.error(err);
            }
        } else {
            setUsernameError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (usernameError) {
            setError('Please fix the errors before submitting.');
            return;
        }

        try {
            const response = await axios.post('/api/signup', { username, email, password });
            console.log(response.data);
            // Redirect to login or homepage after successful signup
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
                {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Signup;
