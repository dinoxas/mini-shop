import React, { Component } from "react";
import { FaReact, FaShoppingCart } from "react-icons/fa";

class Header extends Component {
  showCart() {
    document.querySelector(".sidebar").classList.add("open");
    document.querySelector(".openbtn").classList.add("invisible");
  }
  render() {
    const { cartItems } = this.props;

    return (
      <nav className="navbar navbar-light sticky-top bg-dark mb-3">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand text-white text-lg" href="/">
              Shopping app <FaReact color="#00d8ff" size="30" />
            </a>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item">
              <button className="openbtn mr-0" onClick={() => this.showCart()}>
                <FaShoppingCart size="30" />{" "}
                <span
                  className="badge badge-danger"
                  style={{ fontSize: "60%" }}
                >
                  {cartItems.length}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
