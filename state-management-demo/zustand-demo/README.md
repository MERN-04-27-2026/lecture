# Zustand Demo

A minimalistic e-commerce app demonstrating **Zustand** state management.

## Features

- **Product List**: Displays products from DummyJSON API with loading/error states
- **Shopping Cart**: Add items, adjust quantities, view total price
- **User Authentication**: Login/Logout toggle that controls checkout availability

## State Management Approach

This project uses **Zustand** - a small, fast, and scalable state management solution:

- ✅ Minimal boilerplate
- ✅ No providers needed
- ✅ Hook-based API
- ✅ Direct state mutations (internally immutable)
- ✅ TypeScript-friendly
- ✅ Tiny bundle size (~1KB)
- ❌ No Redux DevTools by default (can be added)

## Folder Structure

```
src/
  features/
    products/
      - types.ts
      - useProductsStore.ts   (Zustand store)
      - ProductList.tsx
      - ProductList.css
    cart/
      - types.ts
      - useCartStore.ts
      - Cart.tsx
      - Cart.css
    user/
      - useUserStore.ts
      - Header.tsx
      - Header.css
```

## Key Implementation Details

### Store Creation
```typescript
export const useCartStore = create<CartState>((set) => ({
  items: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.items.find(item => item.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { items: [...state.items, { ...product, quantity: 1 }] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      items: state.items.filter(item => item.id !== productId),
    })),
}));
```

### Using the Store in Components
```typescript
// Select entire store
const { items, addToCart } = useCartStore();

// Select specific state (optimized re-renders)
const items = useCartStore((state) => state.items);
const addToCart = useCartStore((state) => state.addToCart);
```

### Async Actions
```typescript
export const useProductsStore = create<ProductsState>((set) => ({
  items: [],
  loading: false,
  error: null,
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('https://dummyjson.com/products?limit=20');
      const data = await response.json();
      set({ items: data.products, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
```

## Running the Project

```bash
npm install
npm run dev
```

## Advantages Over Redux

- **Simpler API**: No actions, reducers, or providers
- **Less Boilerplate**: Define state and actions in one place
- **Better Performance**: Automatic selector optimization
- **Smaller Bundle**: ~1KB vs Redux Toolkit's ~10KB
- **No Context**: Direct store access without Provider wrapper
- **Easier Learning Curve**: Straightforward hook-based API

## When to Use Zustand

✅ **Good for:**
- Small to medium apps
- Projects that don't need Redux DevTools
- Teams wanting minimal boilerplate
- Apps with simple state management needs

❌ **Consider Redux if:**
- You need extensive middleware ecosystem
- Redux DevTools integration is critical
- Team is already familiar with Redux patterns
- Large enterprise app with complex state logic

## Comparison with Other Approaches

See the sibling projects:
- `core-redux-demo` - Classic Redux with manual setup
- `redux-toolkit-demo` - Modern Redux with RTK
