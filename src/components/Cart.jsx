import React from "react";
import api from "../api";

class Cart extends React.Component {
  state = { item: [] };

  getProducts = async () => {
    const gotItems = await api.get();
    const products = gotItems.data;

    const approved = products.filter((item) => {
      return item.name.includes("Bought");
    });

    this.setState({ item: approved });
    this.props.add();
  };

  remove = async (id) => {
    console.log("test");
    await api.delete(id);

    this.getProducts();
  };

  payment = () => {
    this.state.item.forEach((item) => {
      this.remove(item.id);
    });
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
          <br />
          <button onClick={() => this.remove(i.id)}>Remove</button>
        </div>
      );
    });
    return (
      <div className="cart-main">
        <div className="pay-button">
          {this.state.item.length ? (
            <button onClick={this.payment}>Pay</button>
          ) : (
            ""
          )}
        </div>
        <div className="all-container">{itemized}</div>
      </div>
    );
  }
}

export default Cart;
