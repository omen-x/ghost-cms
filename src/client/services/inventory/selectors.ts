import { AppState } from '../../app/reducer';


export const productCategoriesSelector = (state: AppState) => state.inventory.categories;
