import React, { useState } from 'react';
import './ItemListContainer.css';
import ProductCard from './ProductCard';

const products = {
  vuelo: [
    {
      name: 'Simulador de Vuelo',
      description: 'Un simulador de vuelo realista para pilotos en entrenamiento.',
      price: 299.99,
      image: 'https://res.cloudinary.com/dkv58dvqy/image/upload/v1738619823/simuVuelo_jpuypw.jpg'
    }
  ],
  carreras: [
    {
      name: 'Simulador de Carreras',
      description: 'Experimenta la emoción de las carreras con este simulador.',
      price: 199.99,
      image: 'https://res.cloudinary.com/dkv58dvqy/image/upload/v1738619814/simuCarreras_tceqig.jpg'
    }
  ],
  espacio: [
    {
      name: 'Simulador de Espacio',
      description: 'Explora el espacio y más allá con este simulador.',
      price: 399.99,
      image: 'https://res.cloudinary.com/dkv58dvqy/image/upload/v1738619799/simuEspacio_lnaajp.avif'
    }
  ]
};

const ItemListContainer = ({ greeting }) => {
  const [category, setCategory] = useState('vuelo');

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div className="categories">
        <button className="btn btn-secondary" onClick={() => setCategory('vuelo')}>Simuladores de Vuelo</button>
        <button className="btn btn-secondary" onClick={() => setCategory('carreras')}>Simuladores de Carreras</button>
        <button className="btn btn-secondary" onClick={() => setCategory('espacio')}>Simuladores de Espacio</button>
      </div>
      <div className="item-list">
        {products[category].map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;