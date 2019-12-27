import { ProductCategory } from '../../../server/features/Inventory/Category/types';
import { ProductModel } from '../../../server/features/Inventory/Product/model';


export interface InventoryState {
  categories: ProductCategory[];
  products: ProductModel[];
}

export type InventoryActionMap = {
  SET_PRODUCTS_CATEGORIES: ProductCategory[];
  SET_PRODUCTS: ProductModel[];
};
