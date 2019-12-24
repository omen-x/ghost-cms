import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageContent } from '../../components/Utils/Content';
import { PageTitle } from '../../components/Utils/Titles';
import CategoriesPage from './CategoriesPage';


const Inventory = (): JSX.Element => (
  <PageContent>
    <PageTitle>Products Categories</PageTitle>
    <Switch>
      <Route path="/categories" component={CategoriesPage} />
    </Switch>
  </PageContent>
);

export default Inventory;
