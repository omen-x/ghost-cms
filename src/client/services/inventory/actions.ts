import { ProductCategoryModel } from '../../../server/features/Inventory/Category/model';
import { ProductModel } from '../../../server/features/Inventory/Product/model';
import { DefaultActionType } from '../../utils/types';
import { INVENTORY_ACTION_TYPES } from './types';


export const setCategories = (categories: ProductCategoryModel[]): DefaultActionType<ProductCategoryModel[]> => ({
  type: INVENTORY_ACTION_TYPES.SET_CATEGORIES,
  payload: categories,
});

export const setProducts = (products: ProductModel[]): DefaultActionType<ProductModel[]> => ({
  type: INVENTORY_ACTION_TYPES.SET_PRODUCTS,
  payload: products,
});
