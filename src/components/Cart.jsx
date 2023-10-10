import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const Navigate = useNavigate();

  const handleProceedToCheckout = () => {
    Navigate("/checkout");
  };

  const calculateTotal = (items) => {
    return items.reduce((total, item) => {
      if (item.price && item.quantity) {
        return total + item.price * item.quantity;
      }
      return total;
    }, 0);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
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
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p>Total: ${calculateTotal(cartItems)}</p>
          <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
