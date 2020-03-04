import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { sortProducts, filterProducts } from "../actions/products";

class Filter extends Component {
  render() {
    const { size, sort } = this.props;
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="sortSelect">Order by</label>
              <select
                className="form-control"
                id="sortSelect"
                onChange={e =>
                  this.props.sortProducts(
                    this.props.filteredProducts,
                    e.target.value
                  )
                }
                value={sort}
              >
                <option value="">Select</option>
                <option value="lowest">Price: Lowest - Highest</option>
                <option value="highest">Price: Highest - Lowest</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="sizeSelect">Size</label>
              <select
                className="form-control"
                id="sizeSelect"
                onChange={e =>
                  this.props.filterProducts(this.props.products, e.target.value)
                }
                value={size}
              >
                <option value="">All</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="L">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">
              <strong>{this.props.filteredProducts.length}</strong> product(s)
              found
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  size: state.products.size,
  sort: state.products.sort
});

export default connect(mapStateToProps, { sortProducts, filterProducts })(
  Filter
);
