import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Categories from '../../components/Categories/Categories';
import { PageContent } from '../../components/Utils/Content';
import { PageTitle } from '../../components/Utils/Titles';
import { fetchAndStoreCategories } from '../../services/inventory/thunks';
import { withLoader } from '../../services/network/thunks';


const CategoriesPage = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(withLoader(fetchAndStoreCategories()));
  }, []);

  return (
    <PageContent>
      <PageTitle>Products Categories</PageTitle>
      <Categories />
    </PageContent>
  );
};


export default CategoriesPage;
