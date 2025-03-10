import React from "react";
import Navbar from "./components/layouts/NavBar";
import Cart from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import DarkModeContextProvider from "./context/DarkModeContext";

function App() {
  return (
    <Router>
      <CartContextProvider>
        {/* <DarkModeContextProvider> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route path="/category/:name" component={ItemListContainer} />
          <Route path="/cart" component={Cart} />
          <Route path="/itemDetail/:id" component={ItemDetail} />
          <Route path="/checkout" component={Checkout} />

          <Route path="*" component={() => <h2>404 not found</h2>} />
        </Switch>
        {/* </DarkModeContextProvider> */}
      </CartContextProvider>
    </Router>
  );
}
// se utiliza Switch ya que tuve problemas por la version de react-router-dom, que es anteterior a la version 6

export default App;
