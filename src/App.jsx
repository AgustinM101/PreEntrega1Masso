import React from "react";
import Navbar from "./components/layouts/NavBar";
import Cart from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import DarkModeContextProvider from "./context/DarkModeContext";
import FuzzyText from "./components/common/fuzzyText/FuzzyText";
import "./styles/styles.css";

function App() {
  // Definir las variables hoverIntensity y enableHover
  const hoverIntensity = 0.5;
  const enableHover = true;

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

          <Route
            path="*"
            component={() => (
              <div class="centered-container">
                <FuzzyText
                  baseIntensity={0.2}
                  hoverIntensity={hoverIntensity}
                  enableHover={enableHover}
                >
                  404 ERROR - Página no encontrada
                </FuzzyText>
              </div>
            )}
          />
        </Switch>
        {/* </DarkModeContextProvider> */}
      </CartContextProvider>
    </Router>
  );
}

// se utiliza Switch ya que tuve problemas por la version de react-router-dom, que es anteterior a la version 6

export default App;
