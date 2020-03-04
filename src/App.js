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
    products: [],
    filteredProducts: [],
    cartItems: []
  };

  listProducts() {
    this.setState(state => {
      if (state.sort !== "") {
        state.products.sort((a, b) =>
          state.sort === "lowest"
            ? a.price < b.price
              ? 1
              : -1
            : a.price > b.price
            ? 1
            : -1
        );
      } else {
        state.products.sort((a, b) => (a.id < b.id ? 1 : -1));
      }

      if (state.size !== "") {
        return {
          filteredProducts: state.products.filter(
            a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0
          )
        };
      }

      return { filteredProducts: state.products };
    });
  }

  handleAddToCart = (e, product) => {
    e.preventDefault();
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach(item => {
        if (item.id === product.id) {
          productAlreadyInCart = true;
          item.count++;
        }
      });

      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    });
  };

  handleRemoveFromCart = (e, item) => {
    e.preventDefault();
    this.setState(state => {
      const cartItems = state.cartItems.filter(el => el.id !== item.id);
      localStorage.setItem("cartItems", cartItems);
      return { cartItems };
    });
  };

  handleChangeSize = e => {
    this.setState({ size: e.target.value });
    this.listProducts();
  };

  handleChangeSort = e => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  };

  componentDidMount() {
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    }
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
                  handleChangeSize={this.handleChangeSize}
                  handleChangeSort={this.handleChangeSort}
                />
                <Products
                  products={filteredProducts}
                  handleAddToCart={this.handleAddToCart}
                />
              </div>
              <div className="col-md-4">
                <Cart
                  cartItems={cartItems}
                  handleRemoveFromCart={this.handleRemoveFromCart}
                />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
