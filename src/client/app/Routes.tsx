import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Header from '../components/Header/Header';
import Dashboard from '../pages/Dashboard/Dashboard';
import Inventory from '../pages/Inventory/Inventory';
import { PageWrap, BodyWrap } from '../components/Utils/Content';
import Sidebar from '../components/Sidebar/Sidebar';


const Routes = (): JSX.Element => (
  <Router>
    <Sidebar />
    <BodyWrap>
      <Header />
      <PageWrap>

        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/inventory" component={Inventory} />
        </Switch>

      </PageWrap>
    </BodyWrap>
  </Router>
);

export default Routes;
