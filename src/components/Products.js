import React, { Component } from "react";
import formatCurrency from "../utils/helper";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/products";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { products } = this.props;
    return (
      <div className="row">
        {products.map((p, index) => (
          <div className="col-md-4" key={index}>
            <div className="thumbnail text-center">
              <a
                href={`#${p.id}`}
                onClick={e => this.props.handleAddToCart(e, p)}
              >
                <img src={`/products/${p.sku}_2.jpg`} alt={p.title} />
                <p>{p.title}</p>
              </a>
              <div className="card-body">
                <p>{formatCurrency(p.price)}</p>
                <button
                  className="btn btn-primary"
                  onClick={e => this.props.handleAddToCart(e, p)}
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

function mapStateToProps(state) {
  return {
    products: state.products.items
  };
}

export default connect(mapStateToProps, { fetchProducts })(Products);
