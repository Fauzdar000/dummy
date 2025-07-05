import { Link } from 'react-router-dom';
import './navbar.css'

export default function Dummyproject({ search, setSearch }) {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      <ul className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>

      {/* <div className="nav-search">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div> */}
    </div>
  );
}
