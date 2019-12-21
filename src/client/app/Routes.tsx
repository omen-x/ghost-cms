import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';


const Routes = (): JSX.Element => (
  <Router>
    <Route
      path="/"
      exact
      render={() => <div>Dashboard</div>}
    />
  </Router>
);

export default Routes;
