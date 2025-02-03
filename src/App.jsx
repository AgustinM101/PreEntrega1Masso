import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <div id="home" className="container mt-4">
        <ItemListContainer greeting="Bienvenido a la Tienda de Simuladores" />
      </div>
    </div>
  );
}

export default App;