import { ProductCategoryResponse } from '../../../server/features/Inventory/Category/types';
import { ProductResponse, ProductMetaResponse } from '../../../server/features/Inventory/Product/types';


export interface InventoryState {
  categories: {
    items: ProductCategoryResponse[];
  };
  products: {
    items: ProductResponse[];
    meta: ProductMetaResponse;
  };
}

export type InventoryActionMap = {
  SET_PRODUCTS_CATEGORIES: {
    items: ProductCategoryResponse[];
  };
  SET_PRODUCTS: {
    items: ProductResponse[];
    meta: ProductMetaResponse;
  };
  DELETE_CATEGORY: string;
};
