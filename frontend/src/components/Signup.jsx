import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [signupError, setSignupError] = useState('');

    const handleUsernameChange = async (e) => {
        const { value } = e.target;
        setUsername(value);

        if (!value) {
            setUsernameError('');
            return;
        }

        try {
            const response = await axios.post('/api/auth/check-username', { username: value });
            setUsernameError(response.data.message === 'Username is available.' ? '' : 'Username is taken.');
        } catch (error) {
            console.error('Error checking username:', error);
            setUsernameError('Error checking username.');
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        if (usernameError) {
            setSignupError('Please fix the errors above before submitting.');
            return;
        }

        try {
            const response = await axios.post('/api/auth/signup', { username, password });
            alert(response.data.message);
            // Optionally redirect to login or homepage
        } catch (error) {
            console.error('Signup error:', error);
            setSignupError(error.response?.data.message || 'Error signing up.');
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSignup}>
                <h2>Sign Up</h2>
                <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Username"
                    required
                />
                {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Join Now</button>
                {signupError && <p style={{ color: 'red' }}>{signupError}</p>}
            </form>
        </div>
    );
};

export default Signup;
