import { createReducer, ReducerCases } from '../../app/types';
import { InventoryActionMap, InventoryState } from './types';


const initialState: InventoryState = {
  categories: {
    items: [],
  },
  products: {
    items: [],
    meta: {
      pages: 1,
    },
  },
};


const reducerCases: ReducerCases<InventoryState, InventoryActionMap> = {
  SET_PRODUCTS_CATEGORIES: (state, payload) => ({
    ...state,
    categories: {
      items: payload.items,
    },
  }),
  DELETE_CATEGORY: (state, payload) => ({
    ...state,
    categories: {
      ...state.categories,
      items: state.categories.items.filter((cat) => cat._id !== payload),
    },
  }),
  SET_PRODUCTS: (state, payload) => ({
    ...state,
    products: {
      ...state.products,
      items: payload.items,
      meta: payload.meta,
    },
  }),
};


export default createReducer<InventoryState, InventoryActionMap>(initialState, reducerCases);
