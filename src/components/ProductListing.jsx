import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "../index.css";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    category: "all",
    sortBy: "price-asc",
  });

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        filterAndSortProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filterAndSortProducts = (data) => {
    const filtered = filterOptions.category === "all"
      ? data
      : data.filter((product) => product.category === filterOptions.category);

    const sorted = filtered.slice().sort((a, b) => {
      if (filterOptions.sortBy === "price-asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setFilteredProducts(sorted);
  };

  const handleAddToCart = (product) => {
    const newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
    };

    addToCart(newItem);
    alert("Product added to cart");
  };

  return (
    <div className="product-listing">
      <h2>Products</h2>
      <div className="filter-options">
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          name="category"
          value={filterOptions.category}
          onChange={(e) =>
            setFilterOptions({
              ...filterOptions,
              category: e.target.value,
            })
          }
          className="filter-dropdown"
        >
          <option value="all">All Categories</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics </option>
        </select>
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          name="sort"
          value={filterOptions.sortBy}
          onChange={(e) => {
            setFilterOptions({
              ...filterOptions,
              sortBy: e.target.value,
            });
            filterAndSortProducts(products);
          }}
          className="filter-dropdown"
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          {/* Add other sorting options */}
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
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
