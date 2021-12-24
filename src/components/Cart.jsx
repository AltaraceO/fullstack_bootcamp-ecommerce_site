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
    // console.log(approved);

    this.setState({ item: approved });
    // console.log(this.state.item.length);
  };

  remove = async (id) => {
    console.log("test");
    await api.delete(id);

    this.getProducts();
  };

  payment = () => {
    this.state.item.forEach((item) => {
      console.log(item.id);
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
          {/* Qty: {i.Qty} */}
          <br />
          <button onClick={() => this.remove(i.id)}>Remove</button>
        </div>
      );
    });
    return (
      <div>
        {this.state.item.length ? (
          <button onClick={this.payment}>Pay</button>
        ) : (
          ""
        )}
        <div className="all-container">{itemized}</div>
      </div>
    );
  }
}

export default Cart;
