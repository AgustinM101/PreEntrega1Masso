import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, getTotalAmount, removeById, resetCart } =
    useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito esta vacio</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <button onClick={() => removeById(item.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${getTotalAmount()}</h3>
            <button onClick={resetCart}>Vaciar Carrito</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
