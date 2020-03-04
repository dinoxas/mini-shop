import React, { Component } from "react";
import formatCurrency from "../utils/helper";

export default class Cart extends Component {
  render() {
    const { cartItems, handleRemoveFromCart } = this.props;
    return (
      <div className="alert alert-info">
        <p className="text-center">
          {cartItems.length === 0
            ? "Cart is empty"
            : `You have ${cartItems.length} item(s) in the cart`}
        </p>

        {cartItems.length > 0 && (
          <div className="">
            <ul className="list-group">
              {cartItems.map((item, index) => (
                <li className="list-group-item" key={index}>
                  <span>{item.title}</span> x{item.count} ={" "}
                  {item.price * item.count}{" "}
                  <a
                    href="/"
                    className="badge badge-secondary"
                    onClick={e => handleRemoveFromCart(e, item)}
                  >
                    X
                  </a>
                </li>
              ))}
            </ul>
            <div className="font-weight-bold">
              Total:{" "}
              {formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </div>
            <button
              className="btn btn-info"
              onClick={() => window.alert("Checkout")}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    );
  }
}
