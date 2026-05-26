import { useCartStore } from './useCartStore';
import { useUserStore } from '../user/useUserStore';
import './Cart.css';

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart } = useCartStore();
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert('Checkout successful!');
    clearCart();
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.title} />
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="total">
              <strong>Total:</strong> ${total.toFixed(2)}
            </div>
            <button
              className="checkout-btn"
              onClick={handleCheckout}
              disabled={!isLoggedIn}
            >
              {isLoggedIn ? 'Checkout' : 'Login to Checkout'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
