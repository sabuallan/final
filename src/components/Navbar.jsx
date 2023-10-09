import { Link } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">My E-Commerce Store</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Cart.jsx" className="nav-link">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
