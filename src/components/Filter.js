import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    const {
      count,
      size,
      sort,
      handleChangeSort,
      handleChangeSize
    } = this.props;
    return (
      <div className="row">
        <div className="col-md-3">{count} found</div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="sortSelect">Order by</label>
            <select
              className="form-control"
              id="sortSelect"
              onChange={handleChangeSort}
              value={sort}
            >
              <option value="">Select</option>
              <option value="lowest">Price: Lowest - Highest</option>
              <option value="highest">Price: Highest - Lowest</option>
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label htmlFor="sizeSelect">Size</label>
            <select
              className="form-control"
              id="sizeSelect"
              onChange={handleChangeSize}
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
