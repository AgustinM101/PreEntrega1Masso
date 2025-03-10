import {
  Button,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import CancelIcon from "@mui/icons-material/Cancel";
import "./Cart.css";

const Cart = () => {
  const { resetCart, cart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  // funcion para vaciar el carrito con alerta
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

  // funcion para eliminar un item del carrito
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
            <Card
              key={elemento.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 2,
                maxWidth: 650,
                margin: "auto",
                backgroundColor: "#fef5e7",
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 151, height: 200, objectFit: "cover" }}
                image={elemento.image}
                alt={elemento.name}
              />
              <CardContent sx={{ flex: "1 0 auto", padding: 2 }}>
                <Typography component="div" variant="h5" noWrap>
                  {elemento.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  noWrap
                >
                  {elemento.description}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  ${elemento.price}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Cantidad: {elemento.quantity}
                </Typography>
                <IconButton
                  color="primary"
                  onClick={() => handleRemoveItem(elemento.id)}
                >
                  <CancelIcon />
                </IconButton>
              </CardContent>
            </Card>
          ))}
          <div className="cart-total">
            <h3>Total: ${total}</h3>
            <Button
              variant="contained"
              color="primary"
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
