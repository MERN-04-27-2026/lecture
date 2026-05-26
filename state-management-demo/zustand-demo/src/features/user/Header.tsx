import { useUserStore } from './useUserStore';
import { useCartStore } from '../cart/useCartStore';
import './Header.css';

export const Header = () => {
  const { isLoggedIn, login, logout } = useUserStore();
  const items = useCartStore((state) => state.items);
  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <h1>Zustand Demo</h1>
      <div className="header-actions">
        <div className="cart-badge">
          Cart: <span className="badge">{cartItemsCount}</span>
        </div>
        <button
          className={isLoggedIn ? 'logout-btn' : 'login-btn'}
          onClick={() => (isLoggedIn ? logout() : login())}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </header>
  );
};
