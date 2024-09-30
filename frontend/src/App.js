import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'; // home
import Navbar from './components/Navbar'; // navbar

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
