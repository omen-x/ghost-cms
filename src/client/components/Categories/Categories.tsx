import { Button, Classes, IButtonProps, IPanelProps, Popover } from '@blueprintjs/core';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCategoryPayload, ProductCategoryResponse } from '../../../server/features/Inventory/Category/types';
import { productCategoriesSelector } from '../../services/inventory/selectors';
import { fetchAndStoreCategories, issueAddCategory, issueDeleteCategory } from '../../services/inventory/thunks';
import { withLoader } from '../../services/network/thunks';
import { AddCategoryBtn, CategoriesWrap, CategoryBtnWrap, EditButtonsWrap, InnerPanel, PanelWrap, PopoverForm } from './styled';


interface AddCategoryProps {
  parentId?: string;
}

const AddCategory: React.FunctionComponent<AddCategoryProps> = ({ parentId }: AddCategoryProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onOpened = (): void => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!inputRef || !inputRef.current) return;

    const payload: ProductCategoryPayload = { name: inputRef.current.value };

    if (parentId) payload.parentId = parentId;

    issueAddCategory(payload);

    inputRef.current.value = '';
    inputRef.current.blur();
  };

  return (
    <>
      <Popover
        onOpened={onOpened}
      >
        <AddCategoryBtn icon="add" large intent="success">Add new category</AddCategoryBtn>
        <PopoverForm onSubmit={onSubmit}>
          <input
            className={`${Classes.INPUT} ${Classes.LARGE}`}
            ref={inputRef}
            required
            placeholder="Enter category name"
            type="text"
          />
          <Button intent="success" large type="submit">Submit</Button>
        </PopoverForm>
      </Popover>
    </>
  );
};

interface EditButtonsProps {
  categoryId: string;
  emptyCategory: boolean;
}

const EditButtons: React.FunctionComponent<EditButtonsProps> = ({ categoryId, emptyCategory }: EditButtonsProps) => {
  const dispatch = useDispatch();
  const deleteCategory = (): void => {
    dispatch(withLoader(issueDeleteCategory(categoryId)));
  };

  return (
    <EditButtonsWrap>
      <Button
        disabled={!emptyCategory}
        icon="delete"
        intent="danger"
        large
        title={emptyCategory ? 'Delete category' : 'You can\'t delete parent category'}
        onClick={deleteCategory}
      />
    </EditButtonsWrap>
  );
};

interface PanelProps {
  categories?: ProductCategoryResponse[];
  parentId?: string;
}

class Category extends React.PureComponent<IPanelProps & PanelProps> {
  render(): JSX.Element {
    const { categories = [], openPanel, parentId } = this.props;

    return (
      <InnerPanel>
        {categories.map((category) => {
          const props: IButtonProps = { large: true };

          props.onClick = (): void => {
            openPanel({
              component: Category,
              title: category.name,
              props: { categories: category.children, parentId: category._id },
            });
          };

          return (
            <CategoryBtnWrap key={category._id}>
              <Button {...props}>{category.name}</Button>
              <EditButtons emptyCategory={category.children.length === 0} categoryId={category._id} />
            </CategoryBtnWrap>
          );
        })}

        <AddCategory parentId={parentId} />
      </InnerPanel>
    );
  }
}


const Categories: React.ElementType = () => {
  const categories = useSelector(productCategoriesSelector);
  const dispatch = useDispatch();

  const initialPanel = {
    component: Category,
    props: {
      categories,
      parentId: null,
    },
    title: 'Main Categories',
  };

  useEffect(() => {
    dispatch(withLoader(fetchAndStoreCategories()));
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
