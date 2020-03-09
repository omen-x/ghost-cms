import { ProductCategoryPayload, ProductCategoryResponse } from '../../../server/services/Inventory/Category/types';
import { AppThunk } from '../../app/utils';
import http from '../network';
import { deleteCategory, storeProductsCategories, storeProducts } from './actions';
import { ProductResponse, ProductMetaResponse } from '../../../server/services/Inventory/Product/types';


export const fetchAndStoreCategories = (): AppThunk => (dispatch) =>
  http.get<ProductCategoryResponse[], {}>('/api/inventory/category/all')
    .then((res) => {
      dispatch(storeProductsCategories({ items: res.data }));
    });

export const issueDeleteCategory = (categoryId: string): AppThunk => (dispatch) =>
  http.delete<ProductCategoryResponse>(`/api/inventory/category/${categoryId}`)
    .then(() => {
      dispatch(deleteCategory(categoryId));
    });

export const issueAddCategory = (payload: ProductCategoryPayload): ReturnType<typeof http.post> =>
  http.post<ProductCategoryPayload, ProductCategoryResponse>('/api/inventory/category', payload);


export const fetchAndStoreProducts = (): AppThunk => (dispatch): Promise<void> =>
  http.get<ProductResponse[], ProductMetaResponse>(`/api/inventory/product${window.location.search}`)
    .then((res) => {
      dispatch(storeProducts({ items: res.data, meta: res.meta }));
    });
