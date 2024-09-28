// src/components/Signup.jsx
import React, { useState } from 'react';
import { signup } from '../api/api';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [usernameTaken, setUsernameTaken] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const result = await signup(username, password);
            // Handle successful signup (e.g., redirect or display a success message)
        } catch (error) {
            if (error.message === 'Username is taken.') {
                setUsernameTaken(true);
            } else {
                setError('Signup failed. Please try again.');
            }
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                    {usernameTaken && <p style={{ color: 'red' }}>Username is taken.</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Sign Up</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default Signup;
