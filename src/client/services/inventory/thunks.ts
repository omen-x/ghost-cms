import { ProductCategoryPayload, ProductCategoryResponse } from '../../../server/features/Inventory/Category/types';
import { AppThunk } from '../../app/utils';
import http from '../network';
import { deleteCategory, storeProductsCategories } from './actions';


export const fetchAndStoreCategories = (): AppThunk => (dispatch): Promise<void> =>
  http.get<ProductCategoryResponse[]>('/api/inventory/category/all')
    .then((categories) => {
      dispatch(storeProductsCategories(categories.data));
    });

export const issueDeleteCategory = (categoryId: string): AppThunk => (dispatch): Promise<void> =>
  http.delete<ProductCategoryResponse>(`/api/inventory/category/${categoryId}`)
    .then(() => {
      dispatch(deleteCategory(categoryId));
    });

export const issueAddCategory = (payload: ProductCategoryPayload): ReturnType<typeof http.post> =>
  http.post<ProductCategoryPayload, ProductCategoryResponse>('/api/inventory/category', payload);
