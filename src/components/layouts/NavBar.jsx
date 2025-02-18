import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
  const cartItemCount = 3; // Aquí puedes usar el estado o contexto para obtener el número de productos en el carrito

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Tienda de Simuladores</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categories">Categorías</Link>
          </li>
        </ul>
        <Link className="nav-link" to="/cart">
          <Badge badgeContent={cartItemCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;