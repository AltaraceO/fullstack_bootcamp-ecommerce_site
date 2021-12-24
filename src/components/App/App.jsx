import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "../NavBar";
import MainPage from "../MainPage";
import Products from "../Products";
import Cart from "../Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/" exact component={MainPage} />
          <Route path="/products/" exact component={Products} />
          <Route path="/cart/" exact component={Cart} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
