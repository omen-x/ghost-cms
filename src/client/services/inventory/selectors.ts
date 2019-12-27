import { AppState } from '../../app/reducer';
import { ProductCategoryResponse } from '../../../server/features/Inventory/Category/types';


export const productCategoriesSelector = (state: AppState): ProductCategoryResponse[] => state.inventory.categories;
