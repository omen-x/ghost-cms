import { Button, IButtonProps, IPanel, IPanelProps } from '@blueprintjs/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCategory } from '../../../server/features/Inventory/Category/types';
import { productCategoriesSelector } from '../../services/inventory/selectors';
import { fetchAndStoreCategories } from '../../services/inventory/thunks';
import { CategoriesWrap, CategoryBtnWrap, EditButtonsWrap, InnerPanel, PanelWrap } from './styled';


const EditButtons: React.FunctionComponent = () => (
  <EditButtonsWrap>
    <Button icon="delete" intent="danger" large title="Delete category" />
  </EditButtonsWrap>
);

interface PanelProps {
  categories?: ProductCategory[];
}

class Category extends React.PureComponent<IPanelProps & PanelProps> {
  render(): JSX.Element {
    const { categories = [], openPanel } = this.props;

    return (
      <InnerPanel>
        {categories.map((category) => {
          const props: IButtonProps = { disabled: true, large: true };

          if (category.children.length !== 0) {
            props.disabled = false;

            props.onClick = (): void => {
              openPanel({
                component: Category,
                title: category.name,
                props: { categories: category.children },
              });
            };
          }

          return (
            <CategoryBtnWrap key={category._id}>
              <Button {...props}>{category.name}</Button>
              {props.disabled && <EditButtons />}
            </CategoryBtnWrap>
          );
        })}
      </InnerPanel>
    );
  }
}


const Categories: React.ElementType = () => {
  const categories = useSelector(productCategoriesSelector);
  const dispatch = useDispatch();

  const initialPanel: IPanel = {
    component: Category,
    props: {
      categories,
    },
    title: 'Main Categories',
  };

  useEffect(() => {
    dispatch(fetchAndStoreCategories());
  }, []);
  if (!categories.length) return <div />;

  return (
    <CategoriesWrap>
      <PanelWrap
        initialPanel={initialPanel}
        showPanelHeader
      />
    </CategoriesWrap>
  );
};


export default Categories;
