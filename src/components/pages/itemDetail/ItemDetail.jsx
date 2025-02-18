import React from 'react';


const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
      <button className="btn btn-primary">Agregar al Carrito</button>
    </div>
  );
};

export default ItemDetail;