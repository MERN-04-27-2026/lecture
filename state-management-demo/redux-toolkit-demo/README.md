# Redux Toolkit Demo

A minimalistic e-commerce app demonstrating **Redux Toolkit (RTK)** state management.

## Features

- **Product List**: Displays products from DummyJSON API with loading/error states
- **Shopping Cart**: Add items, adjust quantities, view total price
- **User Authentication**: Login/Logout toggle that controls checkout availability

## State Management Approach

This project uses **Redux Toolkit** - the modern, official way to write Redux:

- ✅ `configureStore` from '@reduxjs/toolkit'
- ✅ `createSlice` for automatic action creators and reducers
- ✅ `createAsyncThunk` for async operations
- ✅ Immer integration for "mutable" state updates
- ✅ TypeScript-friendly typed hooks
- ✅ Less boilerplate compared to classic Redux

## Folder Structure

```
src/
  features/
    products/
      - types.ts
      - productsSlice.ts   (Slice with reducers & async thunks)
      - ProductList.tsx
      - ProductList.css
    cart/
      - types.ts
      - cartSlice.ts
      - Cart.tsx
      - Cart.css
    user/
      - userSlice.ts
      - Header.tsx
      - Header.css
  store/
    - index.ts             (configureStore)
    - hooks.ts             (Typed useAppDispatch & useAppSelector)
```

## Key Implementation Details

### Slice Pattern
```typescript
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      // Immer allows "mutating" syntax
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
```

### Async Thunks
```typescript
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://dummyjson.com/products?limit=20');
    const data = await response.json();
    return data.products;
  }
);
```

### Store Configuration
```typescript
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
  },
});
```

### Typed Hooks
```typescript
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

## Running the Project

```bash
npm install
npm run dev
```

## Advantages Over Classic Redux

- **Less Boilerplate**: No manual action types or action creators
- **Immer Integration**: Write "mutable" code that's actually immutable
- **Built-in DevTools**: Automatic Redux DevTools setup
- **TypeScript Support**: Better type inference out of the box
- **Async Handling**: `createAsyncThunk` handles pending/fulfilled/rejected states

## Comparison with Other Approaches

See the sibling projects:
- `core-redux-demo` - Classic Redux with manual setup
- `zustand-demo` - Lightweight Zustand state management
