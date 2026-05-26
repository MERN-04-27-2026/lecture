import { Header } from './features/user/Header';
import { ProductList } from './features/products/ProductList';
import { Cart } from './features/cart/Cart';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
