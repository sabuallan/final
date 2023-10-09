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
          path="/"
          exact
          element={<ProductListing />}
        />
        <Route
          path="/product/:productId"
          element={<ProductDetail />}
        />
        <Route
          path="./components/Cart.jsx"
          element={<Cart />}
        />
        <Route
          path="./components/Checkout.jsx"
          element={<Checkout />}
        />
        <Route
          path="./components/Login.jsx"
          element={<Login />}
          />
        {/* Add more routes */}
      </Routes>
    </div>
    </CartProvider>
    );
  
}

export default App;
