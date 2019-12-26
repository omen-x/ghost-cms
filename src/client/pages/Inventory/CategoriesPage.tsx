import React from 'react';
import Categories from '../../components/Categories/Categories';
import { PageContent } from '../../components/Utils/Content';
import { PageTitle } from '../../components/Utils/Titles';


const CategoriesPage = (): JSX.Element => (
  <PageContent>
    <PageTitle>Products Categories</PageTitle>
    <Categories />
  </PageContent>
);


export default CategoriesPage;
