import React from 'react';
import NavBar from './components/layouts/NavBar';
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer';
import ItemDetail from './components/pages/itemDetail/ItemDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/pages/cart/Cart';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <NavBar />
      <Routes>
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/itemDetail/:id" component={ItemDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="*" component={() => <h2>404 not found</h2>} />
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;