import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAndStoreCategories } from '../../services/inventory/thunks';
import { CategoriesWrap } from './styled';


const Categories = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAndStoreCategories());
  }, []);

  return (
    <CategoriesWrap>
      div
    </CategoriesWrap>
  );
};


export default Categories;
