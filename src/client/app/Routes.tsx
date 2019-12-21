import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Header from '../components/Header/Header';
import Dashboard from '../pages/Dashboard/Dashboard';
import Inventory from '../pages/Inventory/Inventory';


const Routes = (): JSX.Element => (
  <Router>
    <Header />
    <Route path="/" exact component={Dashboard} />
    <Route path="/inventory" component={Inventory} />
  </Router>
);

export default Routes;
