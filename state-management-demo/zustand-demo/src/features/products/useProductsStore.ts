import { create } from 'zustand';
import type { Product } from './types';

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

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
      set({
        error: error instanceof Error ? error.message : 'Failed to fetch products',
        loading: false,
      });
    }
  },
}));
