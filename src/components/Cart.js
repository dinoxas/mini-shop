import React, { Component } from "react";
import formatCurrency from "../utils/helper";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cart";

class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div className="">
        <p className="text-center">
          {cartItems.length === 0
            ? "Cart is empty"
            : `You have ${cartItems.length} item(s) in the cart`}
        </p>

        {cartItems.length > 0 && (
          <div className="">
            {/* <ul className="list-group">
              {cartItems.map((item, index) => (
                <li className="list-group-item p-1" key={index}>
                  <img
                    className="p-2 float-left"
                    style={{ width: "50px" }}
                    src={`/products/${item.sku}_1.jpg`}
                    alt={item.title}
                  />
                  <span className="small">
                    {item.title} x{item.count} = {item.price * item.count}{" "}
                  </span>
                  <a
                    href="/"
                    className="badge badge-secondary"
                    onClick={e => {
                      e.preventDefault();
                      this.props.removeFromCart(this.props.cartItems, item);
                    }}
                  >
                    X
                  </a>
                </li>
              ))}
            </ul> */}
            <table className="bg-light table">
              <thead>
                <tr>
                  <th colSpan="3" className="small">
                    Order
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td className="p-2">
                      <img
                        className="img-thumbnail"
                        style={{ width: "50px" }}
                        src={`/products/${item.sku}_2.jpg`}
                        alt={item.title}
                      />{" "}
                    </td>
                    <td className="p-2">
                      <div className="small">
                        {item.title} (Qty: {item.count})
                      </div>
                      <div>
                        <span className="small">
                          {formatCurrency(item.price * item.count)}
                        </span>
                      </div>
                    </td>

                    <td className="p-2">
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
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="p-2">
                    <button
                      className="btn btn-info"
                      onClick={() => window.alert("Checkout")}
                    >
                      Checkout
                    </button>
                  </td>

                  <td colSpan="2" className="text-right">
                    Total{" "}
                    {formatCurrency(
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    )}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart.items
});

export default connect(mapStateToProps, { removeFromCart })(Cart);
