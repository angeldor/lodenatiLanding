import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            <a href="#">Lo de Nati</a>
          </div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          <a href="#">Nosotros</a>
          <a href="#">Nuestros productos</a>
          <a href="#">Donde estamos</a>
          <a href="#">Contacto</a>
          <a href="#">Hace tu pedido</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
