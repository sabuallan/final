import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext, useCart } from "./CartContext";


const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductData();
  }, [productId]);

  // Access the cart context to add products to the cart
  const { addToCart } = useContext(CartContext);

  // Function to add the product to the cart
  const handleAddToCart = () => {
    if (product) {
      addToCart(product); // Assuming addToCart is a function in your cart context
      alert('Product added to cart');
    }
  };

  return (
    <div className="product-detail">
      {product ? (
        <>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
          <Link to="/products">Back to Products</Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
