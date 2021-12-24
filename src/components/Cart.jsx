import React from "react";
import api from "../api";
// import Product from "./Product";
// import { Link } from "react-router-dom";

class Cart extends React.Component {
  state = { item: [] };

  getProducts = async () => {
    const gotItems = await api.get();
    const products = gotItems.data;

    const approved = products.filter((item) => {
      if (item.name.includes("Bought")) {
        return item;
      }
    });
    this.setState({ item: approved });
  };
  componentDidMount() {
    this.getProducts();
  }

  render() {
    const itemized = this.state.item.map((i) => {
      return (
        <div className="product-container" key={i.id}>
          <strong>{i.name}</strong>
          <p>
            <strong> Price:</strong> ${i.price}
          </p>
          <br />
          <div>
            <strong>
              <p>About this product:</p>
            </strong>
            {i.description}
          </div>
          <br />
        </div>
      );
    });
    return (
      <div className="all-container">
        <br />
        {itemized}
      </div>
    );
  }
}

export default Cart;
