import React from "react";
import api from "../api";

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
    console.log(this.state.item.length);
  };

  remove = async (id) => {
    await api.delete(id);
    this.getProducts();
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const itemized = this.state.item.map((i) => {
      return (
        <div className="cart-container" key={i.id}>
          <strong>{i.name}</strong>
          <p>
            <strong> Price:</strong> ${i.price}
          </p>
          <button onClick={() => this.remove(i.id)}>Remove</button>
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
