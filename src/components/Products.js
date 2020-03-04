import React, { Component } from "react";
import formatCurrency from "../utils/helper";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/products";
import { addToCart } from "../actions/cart";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <div className="row">
        {this.props.products.map((p, index) => (
          <div className="col-md-4" key={index}>
            <div className="text-center">
              <a
                className="text-info"
                href={`#${p.id}`}
                onClick={() => this.props.addToCart(this.props.cartItems, p)}
              >
                <img
                  src={`/products/${p.sku}_2.jpg`}
                  className="mb-3"
                  alt={p.title}
                />
                <p>{p.title}</p>
              </a>
              <div className="mb-3">
                <p>{formatCurrency(p.price)}</p>
                <button
                  className="btn btn-outline-info"
                  onClick={() => this.props.addToCart(this.props.cartItems, p)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items
});

export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
