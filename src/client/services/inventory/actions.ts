import { actionCreator } from '../../app/types';
import { InventoryActionMap } from './types';


const creator = actionCreator<InventoryActionMap>();


export const storeProductsCategories = creator.createAction('SET_PRODUCTS_CATEGORIES');

export const deleteCategory = creator.createAction('DELETE_CATEGORY');

export const storeProducts = creator.createAction('SET_PRODUCTS');
