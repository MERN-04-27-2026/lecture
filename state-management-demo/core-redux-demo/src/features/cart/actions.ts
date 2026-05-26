import type { Product } from '../products/types';

export const ADD_TO_CART = 'cart/add';
export const REMOVE_FROM_CART = 'cart/remove';
export const UPDATE_QUANTITY = 'cart/updateQuantity';
export const CLEAR_CART = 'cart/clear';

export const addToCart = (product: Product) => ({
  type: ADD_TO_CART as typeof ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId: number) => ({
  type: REMOVE_FROM_CART as typeof REMOVE_FROM_CART,
  payload: productId,
});

export const updateQuantity = (productId: number, quantity: number) => ({
  type: UPDATE_QUANTITY as typeof UPDATE_QUANTITY,
  payload: { productId, quantity },
});

export const clearCart = () => ({
  type: CLEAR_CART as typeof CLEAR_CART,
});

export type CartAction =
  | ReturnType<typeof addToCart>
  | ReturnType<typeof removeFromCart>
  | ReturnType<typeof updateQuantity>
  | ReturnType<typeof clearCart>;
