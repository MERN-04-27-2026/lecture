import { createStore, combineReducers, applyMiddleware } from 'redux';
import { productsReducer } from '../features/products/reducer';
import { cartReducer } from '../features/cart/reducer';
import { userReducer } from '../features/user/reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const thunkMiddleware =
  (store: any) => (next: any) => (action: any) => {
    if (typeof action === 'function') {
      return action(store.dispatch, store.getState);
    }
    return next(action);
  };

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
