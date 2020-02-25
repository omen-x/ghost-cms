import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemsTable from '../../components/ItemsTable/ItemsTable';
import { PageContent } from '../../components/Utils/Content';
import { PageTitle } from '../../components/Utils/Titles';
import { fetchAndStoreProducts } from '../../services/inventory/thunks';
import { productsPageCountSelector, productsSelector } from '../../services/inventory/selectors';
import { getProductsRows } from '../../services/inventory';
import Pagination from '../../components/Pagination/Pagination';
import { getQueryParam, updateQueryParams } from '../../utils';


const tableHeaders = ['#', 'Title', 'Price', 'Date Created'];


const ProductsPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const pagesCount = useSelector(productsPageCountSelector);

  useEffect(() => {
    dispatch(fetchAndStoreProducts());
  }, []);

  if (!products.length) return <div />;

  const currentPage = getQueryParam('page') || '1';
  const rows = getProductsRows(products, currentPage);

  const navigateToPage = (page: string): void => {
    updateQueryParams({ page });
    dispatch(fetchAndStoreProducts());
  };

  return (
    <PageContent>
      <PageTitle>Products</PageTitle>
      <ItemsTable
        headers={tableHeaders}
        rows={rows}
      />
      <Pagination
        pagesCount={pagesCount}
        activePage={currentPage}
        navigateToPage={navigateToPage}
      />
    </PageContent>
  );
};


export default ProductsPage;
