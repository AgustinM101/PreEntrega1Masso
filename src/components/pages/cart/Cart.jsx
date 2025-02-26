import { Button, IconButton } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom"; // Cambiado de "react-router" a "react-router-dom"
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import CancelIcon from "@mui/icons-material/Cancel";
import "./Cart.css";

const Cart = () => {
  const { resetCart, cart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  const resetCartWithAlert = () => {
    Swal.fire({
      title: "Seguro quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `No, dejar como estaba`,
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        resetCart();
        Swal.fire({
          title: "Carrito vaciado con exito",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "Ok",
          icon: "success",
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "El carrito queda como estaba",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "Ok",
          icon: "info",
        });
      }
    });
  };

  const handleRemoveItem = (id) => {
    removeById(id);
    Swal.fire({
      title: "Producto eliminado",
      icon: "warning",
      confirmButtonText: "Ok",
    });
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cart.map((elemento) => (
            <div key={elemento.id} className="cart-item">
              <img src={elemento.image} alt={elemento.name} />
              <div>
                <h3>{elemento.name}</h3>
                <p>{elemento.description}</p>
                <p>${elemento.price}</p>
                <IconButton
                  color="secondary"
                  onClick={() => handleRemoveItem(elemento.id)}
                >
                  <CancelIcon />
                </IconButton>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${total}</h3>
            <Button
              variant="outlined"
              color="secondary"
              onClick={resetCartWithAlert}
            >
              Vaciar carrito
            </Button>
            <Button variant="contained" color="primary">
              <Link
                to="/checkout"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Finalizar compra
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
