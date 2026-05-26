import { useEffect } from 'react';
import { useProductsStore } from './useProductsStore';
import { useCartStore } from '../cart/useCartStore';
import './ProductList.css';

export const ProductList = () => {
  const { items, loading, error, fetchProducts } = useProductsStore();
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products-grid">
        {items.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="description">{product.description}</p>
            <p className="price">${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
