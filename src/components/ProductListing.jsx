import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "../index.css";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  // Using the useCart hook to access addToCart
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=20"
        );
        const data = await response.json();

        // Set the products state with the fetched data
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Call the fetchProducts function to load product data
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert("Product added to cart");
  };

  return (
    <div className="product-listing">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
          >
            <img
              src={product.image}
              alt={product.title}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
