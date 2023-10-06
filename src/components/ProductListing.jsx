import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/index.css';

const ProductListing = () => {
  // Define state to store the list of products
  const [products, setProducts] = useState([]);

  // Simulate fetching product data from the API
  useEffect(() => {
    // Fetch product data from the API endpoint
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=5');
        const data = await response.json();

        // Set the products state with the fetched data
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Call the fetchProducts function to load product data
    fetchProducts();
  }, []);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
