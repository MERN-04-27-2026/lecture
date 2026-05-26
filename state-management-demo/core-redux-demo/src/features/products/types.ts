export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
}

export interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}
