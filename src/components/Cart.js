import React, { useContext } from 'react';
import CartItem from './CartItem';
import CartContext from './CartContext'; // Import your cart context

const Cart = () => {
  // Access the cart state from context or state management library
  const { cartItems } = useContext(CartContext);

  // Function to calculate the total cost of items in the cart
  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <p>Total: ${calculateTotal(cartItems)}</p>
          <button>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;


export default Cart;
