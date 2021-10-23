import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav_bar">
      <div className="logo">LOGO</div>
      <ul className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
      <div className="search">
          <input type="search" placeholder="Search..." />
      </div>
    </nav>
  );
};

export default Header;
