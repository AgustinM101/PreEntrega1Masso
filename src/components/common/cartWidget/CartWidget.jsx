import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

const CartWidget = ({ count }) => {
  return (
    <div className="cart-widget">
      <FaShoppingCart />
      {count > 0 && <span className="cart-count">{count}</span>}
    </div>
  );
};

export default CartWidget;