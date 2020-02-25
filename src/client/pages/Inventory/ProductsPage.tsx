import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductResponse } from '../../../server/features/Inventory/Product/types';
import ItemsTable from '../../components/ItemsTable/ItemsTable';
import { PageContent } from '../../components/Utils/Content';
import { PageTitle } from '../../components/Utils/Titles';
import { fetchAndStoreProducts } from '../../services/inventory/thunks';
import { withLoader } from '../../services/network/thunks';
import { productsSelector } from '../../services/inventory/selectors';
import { getProductsRows } from '../../services/inventory';


const tableHeaders = ['#', 'Title', 'Price', 'Date Created'];


const ProductsPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);

  useEffect(() => {
    dispatch(withLoader(fetchAndStoreProducts()));
  }, []);

  if (!products.length) return <div />;

  const rows = getProductsRows(products);

  return (
    <PageContent>
      <PageTitle>Products</PageTitle>
      <ItemsTable<ProductResponse>
        headers={tableHeaders}
        rows={rows}
      />
    </PageContent>
  );
};


export default ProductsPage;
