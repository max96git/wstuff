// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import SellAccounts from './components/SellAccounts';
import SellLimiteds from './components/SellLimiteds';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sell-accounts" element={<SellAccounts />} />
                <Route path="/sell-limiteds" element={<SellLimiteds />} />
            </Routes>
        </Router>
    );
};

export default App;
