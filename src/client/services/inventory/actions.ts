import { ProductCategoryModel } from '../../../server/features/Inventory/Category/model';
import { ProductModel } from '../../../server/features/Inventory/Product/model';
import { InventoryActionTypes, SET_CATEGORIES, SET_PRODUCTS } from './types';


export const setCategories = (categories: ProductCategoryModel[]): InventoryActionTypes => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setProducts = (products: ProductModel[]): InventoryActionTypes => ({
  type: SET_PRODUCTS,
  payload: products,
});
