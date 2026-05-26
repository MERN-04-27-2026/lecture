import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { login, logout } from './userSlice';
import './Header.css';

export const Header = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const cartItemsCount = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="header">
      <h1>Redux Toolkit Demo</h1>
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
