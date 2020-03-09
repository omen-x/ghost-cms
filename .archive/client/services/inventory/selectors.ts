import { AppState } from '../../app/reducer';


export const productCategoriesSelector = (state: AppState) => state.inventory.categories.items;

export const productsSelector = (state: AppState) => state.inventory.products.items;

export const productsPageCountSelector = (state: AppState) => state.inventory.products.meta.pages;
