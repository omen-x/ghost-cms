import { ProductCategoryResponse } from '../../../../src/server/services/Inventory/Category/types';
import { ProductResponse, ProductMetaResponse } from '../../../../src/server/services/Products/types';


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
