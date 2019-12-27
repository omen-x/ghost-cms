import { ProductCategoryResponse } from '../../../server/features/Inventory/Category/types';
import { ProductModel } from '../../../server/features/Inventory/Product/model';


export interface InventoryState {
  categories: ProductCategoryResponse[];
  products: ProductModel[];
}

export type InventoryActionMap = {
  SET_PRODUCTS_CATEGORIES: ProductCategoryResponse[];
  SET_PRODUCTS: ProductModel[];
  DELETE_CATEGORY: string;
};
