import { AppState } from '../../app/reducer';
import { ProductCategory } from '../../../server/features/Inventory/Category/types';


export const productCategoriesSelector = (state: AppState): ProductCategory[] => state.inventory.categories;
