import type { Dispatch } from 'redux';
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from './actions';

export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchProductsRequest());
    try {
      const response = await fetch('https://dummyjson.com/products?limit=20');
      const data = await response.json();
      dispatch(fetchProductsSuccess(data.products));
    } catch (error) {
      dispatch(
        fetchProductsFailure(
          error instanceof Error ? error.message : 'Failed to fetch products'
        )
      );
    }
  };
};
