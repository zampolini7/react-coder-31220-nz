import React from "react";
import "./style.css";
import { CartWidget } from "../CartWidget";

export const NavBar = () => {
  return (
    <div className="App container">
      <header className="App-header row">
        <nav className="container navbar navbar-expand-lg navbar-light  d-flex fixed-top navBarPanda ">
          <a className="navbar-brand navBarPanda " href="#home">
            PANDA
          </a>
          <button
            className="navbar-toggler navBarPanda "
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon navBarPanda "></span>
          </button>

          <div className="collapse navbar-collapse d-flex" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#quees">
                  ¿Qué es una giftbox?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#productosContainer">
                  Productos
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contacto">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-end mr-4 pr-4">
            <li className="nav-item d-flex d-flex justify-content-end">
              <div className="dropdown " href="#carrito">
                <button
                  className="btn .bg-gradient-light  dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <CartWidget />
                </button>
              </div>
              <div
                id="carrito2"
                className="dropdown-menu  "
                aria-labelledby="dropdownMenu2"
              ></div>
            </li>
          </div>
        </nav>

        <p>Bienvenidos perritos malvados</p>
      </header>
    </div>
  );
};
