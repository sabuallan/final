import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './components/App';
import CartProvider from './CartContext'; // Import CartProvider
import './style/index.css';

const root = document.getElementById('root');
const app = createRoot(root);

app.render(
  <Router>
    <CartProvider>
      <App />
    </CartProvider>
  </Router>,
);
