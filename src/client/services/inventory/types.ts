import { ProductCategoryModel } from '../../../server/features/Inventory/Category/model';
import { ProductModel } from '../../../server/features/Inventory/Product/model';

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCTS = 'SET_PRODUCTS';


export interface SetCategoriesAction {
  type: string;
  payload: ProductCategoryModel[];
}

export interface SetProductsAction {
  type: string;
  payload: ProductModel[];
}

export type InventoryActionTypes = SetCategoriesAction | SetProductsAction;
