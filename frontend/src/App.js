import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    {/* others.. */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
