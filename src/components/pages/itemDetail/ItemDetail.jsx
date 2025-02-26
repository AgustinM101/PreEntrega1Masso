import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../products";
import { CartContext } from "../../../context/CartContext";
import "./ItemDetail.css";
import ProductSkeleton from "../../common/productSkeleton/ProductSkeleton";

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div className="item-detail">
      <img
        src={product.image}
        alt={product.name}
        className="item-detail-image"
      />
      <div className="item-detail-text">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
