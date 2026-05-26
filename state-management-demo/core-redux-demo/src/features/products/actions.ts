import type { Product } from './types';

export const FETCH_PRODUCTS_REQUEST = 'products/fetchRequest';
export const FETCH_PRODUCTS_SUCCESS = 'products/fetchSuccess';
export const FETCH_PRODUCTS_FAILURE = 'products/fetchFailure';

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST as typeof FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products: Product[]) => ({
  type: FETCH_PRODUCTS_SUCCESS as typeof FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error: string) => ({
  type: FETCH_PRODUCTS_FAILURE as typeof FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export type ProductsAction =
  | ReturnType<typeof fetchProductsRequest>
  | ReturnType<typeof fetchProductsSuccess>
  | ReturnType<typeof fetchProductsFailure>;
