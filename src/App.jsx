import { Route, Routes } from "react-router-dom";
import ProductListing from "./components/ProductListing.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Navbar from "./components/Navbar.jsx";
import CartProvider from "./components/CartProvider.jsx";
import Login from "./components/Login.jsx";

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
            path="/Cart"
            element={<Cart />}
          />
          <Route
            path="/checkout"
            element={<Checkout />}
          />
          <Route
            path="/Login"
            element={<Login />}
          />
          <Route
            path="/"
            exact
            element={<ProductListing />}
          />
          {/* Add more routes */}
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
