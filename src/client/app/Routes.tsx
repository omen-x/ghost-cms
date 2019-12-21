import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Header from '../components/Header/Header';
import Dashboard from '../pages/Dashboard/Dashboard';
import Inventory from '../pages/Inventory/Inventory';


// TODO:
// - 404
const Routes = (): JSX.Element => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/inventory" component={Inventory} />
    </Switch>
  </Router>
);

export default Routes;
