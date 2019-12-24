import { actionCreator } from '../../app/types';
import { InventoryActionMap } from './types';


const creator = actionCreator<InventoryActionMap>();


export const setProductsCategories = creator.createAction('SET_PRODUCTS_CATEGORIES');
