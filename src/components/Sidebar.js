import React, { Component } from "react";

import Cart from "./Cart";

export class Sidebar extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div className="sidebar">
        <Cart cartItems={cartItems} />
      </div>
    );
  }
}

export default Sidebar;
