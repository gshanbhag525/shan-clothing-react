import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block"></div>
      <span>Product</span>
    </div>
    <div className="checkout-header">
      <div className="header-block"></div>
      <span>Description</span>
    </div>
    <div className="checkout-header">
      <div className="header-block"></div>
      <span>Quantity</span>
    </div>
    <div className="checkout-header">
      <div className="header-block"></div>
      <span>Price</span>
    </div>
    <div className="checkout-header">
      <div className="header-block"></div>
      <span>Remove</span>
    </div>
    {
      cartItems.map(cartItem =>
        cartItem.name  
      )
    }
    <div className="total">
      <span>Total : ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
