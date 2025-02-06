import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ProductCard from './ProductCard';

const products = [
  {
    id: 'vuelo',
    name: 'Simulador de Vuelo',
    description: 'Un simulador de vuelo realista para pilotos en entrenamiento.',
    price: 299.99,
    image: 'https://res.cloudinary.com/tu-cuenta/image/upload/v1234567890/simulador-vuelo.jpg'
  },
  {
    id: 'carreras',
    name: 'Simulador de Carreras',
    description: 'Experimenta la emoción de las carreras con este simulador.',
    price: 199.99,
    image: 'https://res.cloudinary.com/tu-cuenta/image/upload/v1234567890/simulador-carreras.jpg'
  },
  {
    id: 'espacio',
    name: 'Simulador de Espacio',
    description: 'Explora el espacio y más allá con este simulador.',
    price: 399.99,
    image: 'https://res.cloudinary.com/tu-cuenta/image/upload/v1234567890/simulador-espacio.jpg'
  }
];

const ItemListContainer = ({ greeting }) => {
  const [selectedCategory, setSelectedCategory] = useState('vuelo');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const product = products.find((product) => product.id === selectedCategory);
    setSelectedProduct(product);
  }, [selectedCategory]);

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div className="categories">
        <button className="btn btn-secondary" onClick={() => setSelectedCategory('vuelo')}>Simuladores de Vuelo</button>
        <button className="btn btn-secondary" onClick={() => setSelectedCategory('carreras')}>Simuladores de Carreras</button>
        <button className="btn btn-secondary" onClick={() => setSelectedCategory('espacio')}>Simuladores de Espacio</button>
      </div>
      <div className="item-list">
        {selectedProduct && <ProductCard product={selectedProduct} />}
      </div>
    </div>
  );
};

export default ItemListContainer;