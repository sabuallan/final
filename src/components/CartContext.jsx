import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create a CartContext with default values
const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

// Custom hook for accessing the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  // State to store the cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Function to remove an item from the cart by its ID
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
