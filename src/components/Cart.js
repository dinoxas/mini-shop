import React, { Component } from "react";
import formatCurrency from "../utils/helper";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cart";

import { FaWindowClose } from "react-icons/fa";

class Cart extends Component {
  hideCart() {
    document.querySelector(".sidebar").classList.remove("open");
    document.querySelector(".openbtn").classList.remove("invisible");
  }

  render() {
    const { cartItems } = this.props;
    return (
      <div className="mb-3">
        <button className="closebtn" onClick={() => this.hideCart()}>
          <FaWindowClose size="30" color="#343a40" />
        </button>
        <div className="pt-2 pb-2 text-center">
          {cartItems.length === 0
            ? "Cart is empty"
            : `You have ${cartItems.length} item(s) in the cart`}
        </div>
        <div></div>
        {cartItems.length > 0 && (
          <div className="p-3">
            <ul className="list-unstyled">
              {cartItems.map((item, index) => (
                <li className="media  mb-3" key={index}>
                  <img
                    className="img-thumbnail"
                    style={{ width: "60px" }}
                    src={`/products/${item.sku}_2.jpg`}
                    alt={item.title}
                  />
                  <div className="media-body pl-2 pr-2">
                    <span className="small">
                      {item.title}
                      <br />
                      (Qty: {item.count})
                    </span>
                    <br />
                  </div>

                  <div className="pl-2 pr-2">
                    <span className="small">
                      {formatCurrency(item.price * item.count)}
                    </span>
                  </div>

                  <div className="">
                    <button
                      type="button"
                      className="close"
                      aria-label="Close"
                      onClick={e => {
                        e.preventDefault();
                        this.props.removeFromCart(this.props.cartItems, item);
                      }}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button
              className="float-left btn btn-warning btn-lg"
              onClick={() => alert("TODO: create checkout view")}
            >
              Checkout
            </button>
            <p className="float-right font-weight-bold mt-3">
              Total:{" "}
              {formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </p>
            <div></div>
          </div>
        )}
      </div> //wrapper
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart.items
});

export default connect(mapStateToProps, { removeFromCart })(Cart);
