import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { connect } from "react-redux";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import Filter from "./components/Filter";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header cartItems={this.props.cartItems} />

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Filter
                size={this.props.size}
                sort={this.props.sort}
                count={this.props.filteredProducts.length}
              />
              <Products products={this.props.filteredProducts} />
            </div>

            <Sidebar cartItems={this.props.cartItems} />
          </div>
        </div>
      </Fragment>
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
