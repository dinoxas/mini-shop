import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    const { count, handleChangeSort, handleChangeSize } = this.props;
    return (
      <div className="row">
        <div className="col-md-4">{count} found</div>
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="sortSelect">Order by</label>
            <select
              className="form-control"
              id="sortSelect"
              onChange={handleChangeSort}
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
              onChange={handleChangeSize}
            >
              <option value="">Select</option>
              <option value="s">S</option>
              <option value="m">M</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
