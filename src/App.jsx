import { Route, Routes } from 'react-router-dom'
import ProductListing from './components/ProductListing.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import Cart from './components/Cart.jsx'
import Checkout from './components/Checkout.jsx'
// import navbar

const App = () => {
  return (
    <div>
     {/* add navbar comp */}
    <Routes>
      <Route path="/" exact element={<ProductListing />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      {/* Add more routes as needed */}
    </Routes>
    </div>
  )
}

export default App