import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import { BodyWrap, PageWrap } from '../components/Utils/Content';
import Dashboard from '../pages/Dashboard/DashboardPage';
import Inventory from '../pages/Inventory/InventoryPage';
import NotFound from '../pages/NotFound/NotFound';


const Routes = (): JSX.Element => (
  <Router>
    <Sidebar />
    <BodyWrap>
      <Header />
      <PageWrap>

        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/inventory" component={Inventory} />
          <Route path="*" component={NotFound} />
        </Switch>

      </PageWrap>
    </BodyWrap>
  </Router>
);

export default Routes;
