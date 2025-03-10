import {
  TextField,
  Snackbar,
  Alert,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";

const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    telefono: "",
  });
  const [orderDate, setOrderDate] = useState("");
  const [orderItems, setOrderItems] = useState([]);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    setIsLoading(true);
    let total = getTotalAmount();
    let date = new Date().toISOString(); // Obtener la fecha y hora actual
    let order = {
      buyer: user,
      items: cart,
      total: total,
      date: date, // Agregar fecha y hora de la compra
      status: "pendiente", // Estado inicial de la orden
    };
    let refCollection = collection(db, "orders");
    const promiseResponse = addDoc(refCollection, order);
    promiseResponse
      .then((res) => {
        setOrderId(res.id);
        setOrderDate(date);
        setOrderItems(cart); // Guardar los items del carrito en el estado
        setIsLoading(false);
        setOpen(true);
        resetCart();
      })
      .catch((error) => {
        console.log({ error });
        setIsLoading(false);
      });

    let productsCollection = collection(db, "products");
    // Actualizar el stock de los productos
    order.items.forEach((item) => {
      let productRef = doc(productsCollection, item.id);
      updateDoc(productRef, { stock: item.stock - item.quantity });
    });
  };

  // funcion para manejar los cambios en los inputs
  const handleChange = (evento) => {
    const { value, name } = evento.target;
    setUser({ ...user, [name]: value });
  };

  // funcion para cerrar el Snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      {!isLoading && orderId && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            boxShadow: 3,
            padding: "20px",
            marginTop: "20px",
            maxWidth: "600px", // Limitar el ancho del cuadro
            margin: "20px auto", // Centrar el cuadro horizontalmente
          }}
        >
          <Typography variant="h4" component="div" gutterBottom>
            Gracias por tu compra
          </Typography>
          <Typography variant="h6" component="div">
            Tu ticket es {orderId}
          </Typography>
          <Typography variant="body1" component="div">
            Fecha de compra: {new Date(orderDate).toLocaleString()}
          </Typography>
          <Typography variant="body1" component="div">
            Nombre: {user.name}
          </Typography>
          <Typography variant="body1" component="div">
            Email: {user.email}
          </Typography>
          <Typography variant="body1" component="div">
            Teléfono: {user.telefono}
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            Productos comprados:
          </Typography>

          {orderItems.map((item) => (
            <Typography key={item.id} variant="body2" component="div">
              {item.name} - Cantidad: {item.quantity} - Precio: ${item.price}
            </Typography>
          ))}
        </Box>
      )}
      <div>
        {!isLoading && !orderId && (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              variant="filled"
              name="name"
              onChange={handleChange}
              value={user.name}
              margin="normal"
              sx={{
                "& .MuiInputLabel-root": { color: "#fff" }, // cambiar el color del texto del label
                "& .MuiInputBase-input": { color: "#fff" }, // cambiar el color del texto del input
                "& .MuiFormHelperText-root": { color: "#ffcccb" }, // cambiar el color del texto de ayuda
              }}
            />
            <TextField
              label="Email"
              variant="filled"
              name="email"
              onChange={handleChange}
              value={user.email}
              margin="normal"
              sx={{
                "& .MuiInputLabel-root": { color: "#fff" },
                "& .MuiInputBase-input": { color: "#fff" },
                "& .MuiFormHelperText-root": { color: "#ffcccb" },
              }}
            />
            <TextField
              label="Teléfono"
              variant="filled"
              name="telefono"
              onChange={handleChange}
              value={user.telefono}
              margin="normal"
              sx={{
                "& .MuiInputLabel-root": { color: "#fff" },
                "& .MuiInputBase-input": { color: "#fff" },
                "& .MuiFormHelperText-root": { color: "#ffcccb" },
              }}
            />
            <Button
              style={{ marginTop: "30px" }}
              type="submit"
              variant="contained"
              endIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        )}

        {isLoading && <h2>Cargando....</h2>}

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Datos enviados exitosamente!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Checkout;
