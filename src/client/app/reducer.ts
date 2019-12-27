import { combineReducers } from 'redux';
import inventoryReducer from '../services/inventory/reducer';
import navigationReducer from '../services/navigation/reducer';
import networkReducer from '../services/network/reducer';


const appReducer = combineReducers({
  network: networkReducer,
  navigation: navigationReducer,
  inventory: inventoryReducer,
});

export type AppState = ReturnType<typeof appReducer>;


export default appReducer;
