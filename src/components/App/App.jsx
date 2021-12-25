import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "../NavBar";
import MainPage from "../MainPage";
import Products from "../Products";
import Cart from "../Cart";
import api from "../../api";

class App extends React.Component {
  state = {
    cartCounter: 0,
  };

  addToCartCounter = async () => {
    const gotItems = await api.get();
    const products = gotItems.data;

    const approved = products.filter((item) => {
      return item.name.includes("Bought");
    });
    this.setState({ cartCounter: approved.length });
    console.log(approved.length);
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar currentCounter={this.state.cartCounter} />
            <Route path="/" exact component={MainPage} />

            <Route exact path="/products/">
              <Products add={this.addToCartCounter} />
            </Route>

            <Route exact path="/cart/">
              <Cart add={this.addToCartCounter} />
            </Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
