import { createContext, useContext } from 'react';

// Create a CartContext with default values
export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

// Custom hook for accessing the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
