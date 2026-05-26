import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeFromCart, updateQuantity, clearCart } from './cartSlice';
import './Cart.css';

export const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert('Checkout successful!');
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.title} />
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            productId: item.id,
                            quantity: item.quantity - 1,
                          })
                        )
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            productId: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
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
