import { ProductCategoryResponse } from '../../../server/features/Inventory/Category/types';
import { ProductResponse } from '../../../server/features/Inventory/Product/types';


export interface InventoryState {
  readonly categories: ProductCategoryResponse[];
  readonly products: ProductResponse[];
}

export type InventoryActionMap = {
  SET_PRODUCTS_CATEGORIES: ProductCategoryResponse[];
  SET_PRODUCTS: ProductResponse[];
  DELETE_CATEGORY: string;
};
