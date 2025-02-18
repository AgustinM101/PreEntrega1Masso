import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
      <Button variant="contained" color="primary">Agregar al Carrito</Button>
      <Link to={`/itemDetail/${product.id}`}>
        <Button variant="outlined" color="primary">Ver detalle</Button>
      </Link>
    </div>
  );
};

export default ProductCard;