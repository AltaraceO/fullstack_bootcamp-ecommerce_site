import React from "react";
import api from "../api";

class Product extends React.Component {
  state = { items: "", currItem: "" };

  handleClick = async (item) => {
    const newObj = {
      name: `Bought ${item.name}`,
      price: item.price,
      Qty: 1,
    };
    await api.post("", newObj);
  };

  render() {
    return (
      <div>
        <div className="product-container">
          <strong>{this.props.item.name}</strong>
          <p>
            <strong> Price:</strong> ${this.props.item.price}
          </p>
          <br />
          <div>
            <strong>
              <p>About this product:</p>
            </strong>
            {this.props.item.description}
          </div>
          <br />
          <button onClick={() => this.handleClick(this.props.item)}>
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
