import React from "react";
import api from "../api";
import Product from "./Product";

class Products extends React.Component {
  state = { item: [] };

  getProducts = async () => {
    const gotItems = await api.get();
    const products = gotItems.data;

    const approved = products.filter((item) => {
      return !item.name.includes("Bought");
    });
    this.setState({ item: approved });
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const itemized = this.state.item.map((i) => {
      return <Product key={i.id} item={i} />;
    });
    return (
      <div className="all-container">
        <br />
        {itemized}
      </div>
    );
  }
}

export default Products;
