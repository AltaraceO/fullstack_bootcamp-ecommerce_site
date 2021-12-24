import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">Welcome Page</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default NavBar;
