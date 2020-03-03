import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    const { cartItems, handleRemoveFromCart } = this.props;
    return (
      <div className="alert alert-info">
        <p>
          {cartItems.length === 0
            ? "Cart is empty"
            : `You have ${cartItems.length} item(s) in the cart`}
        </p>

        {cartItems.length && (
          <ul className="list-unstyled">
            {cartItems.map((item, index) => (
              <li key={index}>
                <span>{item.title}</span> x{item.count}
                <a
                  href="#"
                  className="badge badge-danger"
                  onClick={e => handleRemoveFromCart(e, item)}
                >
                  X
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
