import { useState } from "react";
import { useCart } from "./CartContext";

const Checkout = () => {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For simplicity, just logging the order details.
    console.log("Order Details:");
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Address:", formData.address);
    console.log("Cart Items:", cartItems);

    setFormData({
      name: "",
      email: "",
      address: "",
    });

    // Set the orderPlaced state to true
    setOrderPlaced(true);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
      {orderPlaced && (
        <div className="success-message">
          <p>Your order has been placed successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
