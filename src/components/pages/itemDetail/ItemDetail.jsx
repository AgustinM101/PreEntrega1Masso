import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../../products';
import '../itemDetail/ItemDetail.css';

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.name} className="item-detail-image" />
      <div className="item-detail-text">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <button className="btn btn-primary">Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;