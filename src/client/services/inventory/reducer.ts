import { createReducer, ReducerCases } from '../../app/types';
import { InventoryActionMap, InventoryState } from './types';


const initialState: InventoryState = {
  categories: [],
  products: [],
};


const reducerCases: ReducerCases<InventoryState, InventoryActionMap> = {
  SET_PRODUCTS_CATEGORIES: (state, payload) => ({
    ...state,
    categories: payload,
  }),
  SET_PRODUCTS: (state, payload) => ({
    ...state,
    products: payload,
  }),
};


export default createReducer<InventoryState, InventoryActionMap>(initialState, reducerCases);
