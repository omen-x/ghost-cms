import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ProductResponse } from '../../../server/features/Inventory/Product/types';
import ItemsTable from '../../components/ItemsTable/ItemsTable';
import { PageContent } from '../../components/Utils/Content';
import { PageTitle } from '../../components/Utils/Titles';
import { fetchAndStoreProducts } from '../../services/inventory/thunks';
import { withLoader } from '../../services/network/thunks';


interface ProductRow extends Omit<ProductResponse, '_id' | 'description'> {}

const tableHeaders = ['#', 'Title', 'Category', 'Price', 'Date Created'];


const ProductsPage = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(withLoader(fetchAndStoreProducts()));
  }, []);

  return (
    <PageContent>
      <PageTitle>Products</PageTitle>
      <ItemsTable
        headers={tableHeaders}
      />
    </PageContent>
  );
};

export default ProductsPage;
