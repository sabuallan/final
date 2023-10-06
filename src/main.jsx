import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Import BrowserRouter
import App from './App'
import CartProvider from './components/CartContext' // Import CartProvider
import './index.css'

const root = document.getElementById('root')
const app = createRoot(root)

app.render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
)
