import React, { Component } from "react";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import store from "./store";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

export class App extends Component {
  state = {
    size: "",
    sort: "",
    filteredProducts: [],
    cartItems: []
  };

  componentDidMount() {
    // if (localStorage.getItem("cartItems")) {
    //   this.setState({
    //     cartItems: JSON.parse(localStorage.getItem("cartItems"))
    //   });
    // }
  }
  render() {
    const { size, sort, filteredProducts, cartItems } = this.state;

    return (
      <Provider store={store}>
        <div>
          <div className="container">
            <h1>Shopping cart app</h1>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <Filter
                  size={size}
                  sort={sort}
                  count={filteredProducts.length}
                />
                <Products products={filteredProducts} />
              </div>
              <div className="col-md-4">
                <Cart cartItems={cartItems} />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
