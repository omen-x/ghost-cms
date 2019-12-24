import { combineReducers } from 'redux';
import inventoryReducer from '../services/inventory/reducer';
import navigationReducer from '../services/navigation/reducer';


const appReducer = combineReducers({
  navigation: navigationReducer,
  inventory: inventoryReducer,
});

export type AppState = ReturnType<typeof appReducer>;


export default appReducer;
