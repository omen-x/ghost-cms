import { ProductCategoryModel } from '../../../server/features/Inventory/Category/model';
import { ProductModel } from '../../../server/features/Inventory/Product/model';
import { DefaultActionType } from '../../utils/types';


export enum INVENTORY_ACTION_TYPES {
  SET_CATEGORIES = 'SET_CATEGORIES',
  SET_PRODUCTS = 'SET_PRODUCTS'
}

export interface InventoryState {
  categories: ProductCategoryModel[];
  products: ProductModel[];
}

export type SetCategoriesAction = DefaultActionType<ProductCategoryModel[]>;
export type SetProductsAction = DefaultActionType<ProductModel[]>;


export type InventoryActions = SetCategoriesAction | SetProductsAction;
