import { actionCreator } from '../../app/types';
import { InventoryActionMap } from './types';


const creator = actionCreator<InventoryActionMap>();


export const storeProductsCategories = creator.createAction('SET_PRODUCTS_CATEGORIES');
