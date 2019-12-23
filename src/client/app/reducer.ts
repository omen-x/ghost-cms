import { combineReducers } from 'redux';
import inventoryReducer from '../services/inventory/reducer';


export default combineReducers({
  inventory: inventoryReducer,
});
