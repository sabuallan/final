import { Route, Routes, Navigate } from "react-router-dom";
import ProductListing from "./components/ProductListing.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Navbar from "./components/Navbar.jsx";
import CartProvider from "./components/CartProvider.jsx";
import Login from "./components/Login.jsx";

const isAuthenticated = () => {
  // Check if the user is authenticated by verifying the token
  const authToken = localStorage.getItem("authToken");
  return !!authToken;
};

const App = () => {
  return (
    <CartProvider>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/product/:productId"
            element={<ProductDetail />}
          />
          <Route
            path="/cart"
            element={
              isAuthenticated() ? (
                <Cart />
              ) : (
                <Navigate
                  to="/login"
                  replace
                />
              )
            }
          />
          <Route
            path="/checkout"
            element={
              isAuthenticated() ? (
                <Checkout />
              ) : (
                <Navigate
                  to="/login"
                  replace
                />
              )
            }
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/"
            exact
            element={<ProductListing />}
          />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
