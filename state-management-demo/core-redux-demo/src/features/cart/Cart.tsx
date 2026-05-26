import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { removeFromCart, updateQuantity, clearCart } from './actions';
import './Cart.css';

export const Cart = () => {
  const dispatch = useDispatch();
  // useSelector is how the UI reads data from the global state
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // event handler
  const handleCheckout = () => {
    alert('Checkout successful!');
    // dispatch an action: an object with two fields: type and payload
    // after calling this dispatch
    // the store will receive the action object
    // and store will use the reducers to calculate the new state
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
                        dispatch(updateQuantity(item.id, item.quantity - 1))
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(updateQuantity(item.id, item.quantity + 1))
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
