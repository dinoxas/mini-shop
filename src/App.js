import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Products from "./components/Products";
import Filter from "./components/Filter";

export class App extends Component {
  state = {
    size: "",
    sort: "",
    products: [],
    filteredProducts: []
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

  handleAddToCart() {
    console.log("handleAddToCart");
  }

  handleChangeSize = e => {
    this.setState({ size: e.target.value });
    this.listProducts();
  };

  handleChangeSort = e => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  };

  componentDidMount() {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          products: data,
          filteredProducts: data
        });
      });
  }
  render() {
    const { size, sort, filteredProducts } = this.state;
    return (
      <div>
        <div className="container">
          <h1>Shopping cart apdwedwep</h1>
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
            <div className="col-md-4">cart</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
