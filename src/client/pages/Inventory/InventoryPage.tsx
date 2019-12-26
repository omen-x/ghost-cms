import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../app/reducer';
import { currentPageCategorySelector } from '../../services/navigation/selectors';
import CategoriesPage from './CategoriesPage';
import ProductsPage from './ProductsPage';


interface Props {
  currentPageCategory: string;
}


const InventoryPage = ({ currentPageCategory }: Props): JSX.Element => {
  let component;

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

const mapStateToProps = (state: AppState) => ({
  currentPageCategory: currentPageCategorySelector(state),
});

export default connect(mapStateToProps)(InventoryPage);
