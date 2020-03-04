import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { connect } from "react-redux";
import { FaCartArrowDown, FaReact } from "react-icons/fa";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-dark mb-3">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand text-white text-lg" href="/">
                Shopping app
              </a>
            </div>
            <ul className="navbar-nav ml-auto text-light d-inline-block">
              <li className="nav-item d-inline-block mr-4">
                {" "}
                <FaReact color="#00d8ff" size="50" />
              </li>
              <li className="nav-item d-inline-block mr-4">
                {" "}
                <FaCartArrowDown color="#f5de50" size="50" />
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <Filter
                size={this.props.size}
                sort={this.props.sort}
                count={this.props.filteredProducts.length}
              />
              <Products products={this.props.filteredProducts} />
            </div>
            <div className="col-lg-4">
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
