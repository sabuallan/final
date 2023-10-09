import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const Navigate = useNavigate();

  const handleProceedToCheckout = () => {
    Navigate('/Checkout');
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price} (Quantity: {item.quantity})
              </li>
            ))}
          </ul>
          <p>Total: ${calculateTotal()}</p>
          <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
