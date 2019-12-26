import React from 'react';
import { useSelector } from 'react-redux';
import { currentPageCategorySelector } from '../../services/navigation/selectors';
import CategoriesPage from './CategoriesPage';
import ProductsPage from './ProductsPage';


const InventoryPage = (): JSX.Element => {
  let component;
  const currentPageCategory = useSelector(currentPageCategorySelector);

  switch (currentPageCategory) {
    case 'products':
      component = <ProductsPage />;
      break;
    case 'categories':
    default:
      component = <CategoriesPage />;
  }

  return component;
};


export default InventoryPage;
