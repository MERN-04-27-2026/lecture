# State Management Demo

A comparison of three different state management approaches in React, all implementing the same e-commerce application.

## Overview

This repository contains three identical e-commerce apps, each using a different state management solution:

1. **`core-redux-demo`** - Classic Redux (manual setup, no toolkit)
2. **`redux-toolkit-demo`** - Redux Toolkit (modern Redux)
3. **`zustand-demo`** - Zustand (lightweight alternative)

## Features (All Apps)

Each app implements:
- ✅ Product listing from DummyJSON API
- ✅ Shopping cart with add/remove/quantity controls
- ✅ User authentication (login/logout toggle)
- ✅ Checkout button (enabled only when logged in)
- ✅ Loading and error states
- ✅ Feature-based folder structure

## Quick Start

```bash
# Navigate to any demo folder
cd core-redux-demo
# or
cd redux-toolkit-demo
# or
cd zustand-demo

# Install and run
npm install
npm run dev
```

## Comparison Table

| Feature | Core Redux | Redux Toolkit | Zustand |
|---------|-----------|---------------|---------|
| **Bundle Size** | ~5KB | ~10KB | ~1KB |
| **Boilerplate** | High | Medium | Low |
| **Learning Curve** | Steep | Moderate | Easy |
| **DevTools** | ✅ Yes | ✅ Yes | ⚠️ Optional |
| **Middleware** | Manual | Built-in | Minimal |
| **TypeScript** | Manual types | Good inference | Excellent |
| **Immer** | ❌ No | ✅ Yes | ❌ No |
| **Provider Needed** | ✅ Yes | ✅ Yes | ❌ No |

## Code Comparison

### Adding to Cart

**Core Redux:**
```typescript
// Action type
export const ADD_TO_CART = 'cart/add';

// Action creator
export const addToCart = (product: Product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// Reducer
case ADD_TO_CART:
  const existingItem = state.items.find(item => item.id === action.payload.id);
  if (existingItem) {
    return {
      ...state,
      items: state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    };
  }
  return { ...state, items: [...state.items, newItem] };

// Component
dispatch(addToCart(product));
```

**Redux Toolkit:**
```typescript
// Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // Immer magic!
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

// Component
dispatch(addToCart(product));
```

**Zustand:**
```typescript
// Store
export const useCartStore = create<CartState>((set) => ({
  items: [],
  addToCart: (product) =>
    set((state) => ({
      items: existingItem
        ? state.items.map(item => /* ... */)
        : [...state.items, newItem]
    })),
}));

// Component
const addToCart = useCartStore((state) => state.addToCart);
addToCart(product);
```

## When to Use Each

### Core Redux
✅ **Use when:**
- Learning Redux fundamentals
- Need to understand how Redux works under the hood
- Working with legacy Redux codebases

❌ **Avoid when:**
- Starting a new project (use Redux Toolkit instead)
- Team is new to Redux

### Redux Toolkit
✅ **Use when:**
- Building medium to large applications
- Need powerful DevTools and middleware
- Team is familiar with Redux patterns
- Want official Redux best practices

❌ **Avoid when:**
- Building a small app (might be overkill)
- Team wants minimal learning curve

### Zustand
✅ **Use when:**
- Building small to medium apps
- Want minimal boilerplate
- Team prefers simple, hook-based APIs
- Bundle size is critical

❌ **Avoid when:**
- Need extensive middleware ecosystem
- Redux DevTools is critical
- Large enterprise app with complex requirements

## Project Structure

All three projects follow a **feature-based** folder structure:

```
src/
  features/
    products/    # Product listing feature
    cart/        # Shopping cart feature
    user/        # User authentication feature
  store/         # Store configuration (Redux only)
```

## Learning Resources

- **Redux**: https://redux.js.org/
- **Redux Toolkit**: https://redux-toolkit.js.org/
- **Zustand**: https://github.com/pmndrs/zustand

## Notes

- All three apps fetch data from https://dummyjson.com/products
- Each app is completely standalone with its own dependencies
- The UI and features are identical across all three implementations
- Focus is on comparing state management approaches, not UI design
