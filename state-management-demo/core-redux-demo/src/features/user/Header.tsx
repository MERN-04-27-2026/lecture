import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { login, logout } from './actions';
import './Header.css';

export const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const cartItemsCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="header">
      <h1>Core Redux Demo</h1>
      <div className="header-actions">
        <div className="cart-badge">
          Cart: <span className="badge">{cartItemsCount}</span>
        </div>
        <button
          className={isLoggedIn ? 'logout-btn' : 'login-btn'}
          onClick={() => dispatch(isLoggedIn ? logout() : login())}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </header>
  );
};
