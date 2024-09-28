import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SellLimiteds from './components/SellLimiteds';
import SellAccounts from './components/SellAccounts';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/sell-limiteds" component={SellLimiteds} />
        <Route path="/sell-accounts" component={SellAccounts} />
      </Switch>
    </Router>
  );
}

export default App;
