import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { connect } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Shopping cart app</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Filter
                size={this.props.size}
                sort={this.props.sort}
                count={this.props.filteredProducts.length}
              />
              <Products products={this.props.filteredProducts} />
            </div>
            <div className="col-md-4">
              <Cart cartItems={this.props.cartItems} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cartItems: state.cart.items,
    filteredProducts: state.products.filteredItems,
    sort: state.products.sort,
    size: state.products.size
  };
};

export default connect(mapStateToProps)(App);
