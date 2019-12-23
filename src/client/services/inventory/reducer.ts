import { InventoryActions, InventoryState, INVENTORY_ACTION_TYPES, SetCategoriesAction, SetProductsAction } from './types';


const initialState: InventoryState = {
  categories: [],
  products: [],
};

const inventoryReducer = (state = initialState, action: InventoryActions): InventoryState => {
  switch (action.type) {
    case INVENTORY_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: (action as SetCategoriesAction).payload,
      };
    case INVENTORY_ACTION_TYPES.SET_PRODUCTS:
      return {
        ...state,
        products: (action as SetProductsAction).payload,
      };
    default:
      return state;
  }
};


export default inventoryReducer;
