import { ProductCategoryModel } from '../../../server/features/Inventory/Category/model';
import { ProductModel } from '../../../server/features/Inventory/Product/model';
import { InventoryActionTypes, SetCategoriesAction, SetProductsAction, SET_CATEGORIES, SET_PRODUCTS } from './types';


interface InventoryState {
  categories: ProductCategoryModel[];
  products: ProductModel[];
}

const initialState: InventoryState = {
  categories: [],
  products: [],
};

const inventoryReducer = (state = initialState, action: InventoryActionTypes): InventoryState => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: (action as SetCategoriesAction).payload,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: (action as SetProductsAction).payload,
      };
    default:
      return state;
  }
};


export default inventoryReducer;
