import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="cart-count">3</span>
    </div>
  );
};

export default CartWidget;