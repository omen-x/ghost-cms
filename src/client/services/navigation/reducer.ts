import { createReducer, ReducerCases } from '../../app/types';
import { NavigationActionMap, NavigationState } from './types';


const initialState: NavigationState = {
  currentPageCategory: '',
};

const reducerCases: ReducerCases<NavigationState, NavigationActionMap> = {
  SET_PAGE_CATEGORY: (state, payload) => ({
    ...state,
    currentPageCategory: payload,
  }),
};

export default createReducer<NavigationState, NavigationActionMap>(initialState, reducerCases);
