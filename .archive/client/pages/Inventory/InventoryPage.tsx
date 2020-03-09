import React from 'react';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import CategoriesPage from './CategoriesPage';
import ProductsPage from './ProductsPage';


const InventoryPage = (): JSX.Element => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={`${path}/categories/`} />
      </Route>
      <Route path={`${path}/categories`} component={CategoriesPage} />
      <Route path={`${path}/products`} component={ProductsPage} />
    </Switch>
  );
};


export default InventoryPage;
