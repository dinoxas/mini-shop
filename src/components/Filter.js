import React, { Component } from "react";
import { connect } from "react-redux";
import { sortProducts, filterProducts } from "../actions/products";

class Filter extends Component {
  render() {
    const { count, size, sort } = this.props;
    return (
      <div className="row">
        <div className="col-md-3">{count} found</div>
        <div className="col-md-6">
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
              <option value="lowest">Price: Lowest</option>
              <option value="highest">Price: Highest</option>
            </select>
          </div>
        </div>
        <div className="col-md-3">
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
