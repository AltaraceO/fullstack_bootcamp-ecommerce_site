import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <Link to="/">Welcome Page</Link>
        <Link to="/products">Products</Link>
        <div className="cart-counter">
          <Link to="/cart">Cart</Link> - {this.props.currentCounter}
        </div>
      </div>
    );
  }
}

export default NavBar;
