import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./ItemDetail.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import StyledImage from "../../../animations/StyledImage"; // Importar el componente de imagen con animaciones

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let productCollection = collection(db, "products");
    let refDoc = doc(productCollection, id);
    const getProduct = getDoc(refDoc);
    getProduct.then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  const handleAddToCart = () => {
    setLoading(true);
    setTimeout(() => {
      addToCart({ ...item, quantity: 1 });
      setLoading(false);
      setOpen(true);
    }, 1000); // Simula un delay de 1 segundo
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="item-detail">
      <StyledImage
        src={item.image}
        alt={item.title}
        className="item-detail-image"
      />
      <div className="item-detail-text">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p className="price">${item.price}</p>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCart}
          disabled={loading}
          startIcon={loading && <CircularProgress size={20} />}
        >
          {loading ? "Cargando..." : "Agregar al Carrito"}
        </Button>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Producto agregado al carrito exitosamente!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ItemDetail;
