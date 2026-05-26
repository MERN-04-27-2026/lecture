# Core Redux Demo

A minimalistic e-commerce app demonstrating **manual Redux** state management (without Redux Toolkit).

## Features

- **Product List**: Displays products from DummyJSON API with loading/error states
- **Shopping Cart**: Add items, adjust quantities, view total price
- **User Authentication**: Login/Logout toggle that controls checkout availability

## State Management Approach

This project uses **classic Redux** with manual implementation:

- ✅ `createStore` and `combineReducers` from 'redux'
- ✅ Manual action type constants (e.g., `ADD_TO_CART = 'cart/add'`)
- ✅ Manual action creator functions
- ✅ Hand-written reducers with switch statements
- ✅ Custom thunk middleware for async actions
- ❌ NO `@reduxjs/toolkit`

## Folder Structure

```
src/
  features/
    products/
      - types.ts          (Product interface)
      - actions.ts        (Action types & creators)
      - reducer.ts        (Products reducer)
      - thunks.ts         (Async action creators)
      - ProductList.tsx   (Component)
      - ProductList.css
    cart/
      - types.ts
      - actions.ts
      - reducer.ts
      - Cart.tsx
      - Cart.css
    user/
      - types.ts
      - actions.ts
      - reducer.ts
      - Header.tsx
      - Header.css
  store/
    - index.ts            (Root store with combineReducers)
```

## Key Implementation Details

### Action Types & Creators
```typescript
export const ADD_TO_CART = 'cart/add';

export const addToCart = (product: Product) => ({
  type: ADD_TO_CART as typeof ADD_TO_CART,
  payload: product,
});
```

### Reducer Pattern
```typescript
export const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      // immutable state update logic
      return { ...state, items: [...state.items, newItem] };
    default:
      return state;
  }
};
```

### Store Configuration
```typescript
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
```

## Running the Project

```bash
npm install
npm run dev
```

## Comparison with Other Approaches

See the sibling projects:
- `redux-toolkit-demo` - Modern Redux with RTK
- `zustand-demo` - Lightweight Zustand state management
