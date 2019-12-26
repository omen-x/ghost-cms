import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAndStoreCategories as fetchAndStoreCategoriesAction } from '../../services/inventory/thunks';
import { CategoriesWrap } from './styled';


interface Props {
  fetchAndStoreCategories: () => void;
}

const Categories = ({ fetchAndStoreCategories }: Props): JSX.Element => {
  useEffect(() => {
    fetchAndStoreCategories();
  }, []);

  return (
    <CategoriesWrap>
      div
    </CategoriesWrap>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchAndStoreCategories: () => dispatch(fetchAndStoreCategoriesAction()),
});

export default connect(null, mapDispatchToProps)(Categories);
