import { NetworkState, NetworkActionMap } from './types';
import { ReducerCases, createReducer } from '../../app/types';

const initialState: NetworkState = {
  isFetching: false,
};


const reducerCases: ReducerCases<NetworkState, NetworkActionMap> = {
  START_FETCHING: (state) => ({
    ...state,
    isFetching: true,
  }),
  FINISH_FETCHING: (state) => ({
    ...state,
    isFetching: false,
  }),
};


export default createReducer(initialState, reducerCases);
