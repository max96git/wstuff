import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Create this component
import SellLimiteds from './components/SellLimiteds'; // Create this component
import SellAccounts from './components/SellAccounts'; // Create this component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sell-limiteds" component={SellLimiteds} />
        <Route path="/sell-accounts" component={SellAccounts} />
      </Switch>
    </Router>
  );
};

export default App;
