import { AppThunk } from '../../app/utils';
import http from '../network';
import { storeProductsCategories } from './actions';
import { ProductCategory } from '../../../server/features/Inventory/Category/model';


export const fetchAndStoreCategories = (): AppThunk => (dispatch): Promise<void> =>
  http.get<ProductCategory[]>('/api/inventory/category/all')
    .then((categories) => {
      dispatch(storeProductsCategories(categories.data));
    });
