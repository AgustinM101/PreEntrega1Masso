import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ProductCard from '../../common/productCard/ProductCard';
import { products } from '../../../products';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let arrayFiltrado = products.filter((elemento) => elemento.category === name);

    const getProducts = new Promise((resolve, reject) => {
      let permiso = true;
      if (permiso) {
        resolve(name ? arrayFiltrado : products);
      } else {
        reject({ status: 400, message: 'algo salió mal' });
      }
    });

    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div className="categories">
        <button className="btn btn-secondary" onClick={() => setItems(products.filter((product) => product.category === 'vuelo'))}>Simuladores de Vuelo</button>
        <button className="btn btn-secondary" onClick={() => setItems(products.filter((product) => product.category === 'carreras'))}>Simuladores de Carreras</button>
        <button className="btn btn-secondary" onClick={() => setItems(products.filter((product) => product.category === 'espacio'))}>Simuladores de Espacio</button>
        <button className="btn btn-secondary" onClick={() => setItems(products.filter((product) => product.category === 'shooters'))}>Simuladores de Shooters</button>
      </div>
      <div className="item-list">
        {items.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;