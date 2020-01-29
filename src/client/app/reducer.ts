import { combineReducers } from 'redux';
import inventoryReducer from '../services/inventory/reducer';
import networkReducer from '../services/network/reducer';


const appReducer = combineReducers({
  network: networkReducer,
  inventory: inventoryReducer,
});

export type AppState = ReturnType<typeof appReducer>;


export default appReducer;
