import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CategoriesPage from './CategoriesPage';
import ProductsPage from './ProductsPage';


const InventoryPage = (): JSX.Element => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/categories`} component={CategoriesPage} />
      <Route path={`${path}/products`} component={ProductsPage} />
    </Switch>
  );
};


export default InventoryPage;
