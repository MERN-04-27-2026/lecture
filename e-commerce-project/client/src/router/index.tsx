import { createBrowserRouter } from "react-router-dom";

import GlobalErrorPage from "../components/errors/GlobalErrorPage";
import RootLayout from "../components/layout/RootLayout";

import Home from "../features/products/pages/Home";
import Products from "../features/products/pages/Products";
import ProductDetail from "../features/products/pages/ProductDetail";
import Cart from "../features/cart/pages/Cart";
import Login from "../features/auth/pages/Login";
import Signup from "../features/auth/pages/Signup";
import Settings from "../features/settings/pages/Settings";
import AuthGuard from "../features/auth/components/AuthGuard";

export const router = createBrowserRouter([
  {
    path: "/",
    // this element will be displayed in all children components
    element: <RootLayout />,
    errorElement: <GlobalErrorPage />,
    // nested routes
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      {
        // dynamic routing
        path: "products/:id",
        element: <ProductDetail />,
      },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      {
        path: "cart",
        element: (
          <AuthGuard>
            <Cart />
          </AuthGuard>
        ),
      },
      {
        path: "settings",
        element: (
          <AuthGuard>
            <Settings />
          </AuthGuard>
        ),
      },
    ],
  },
]);
