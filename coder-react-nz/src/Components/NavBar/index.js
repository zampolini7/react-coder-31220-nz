import React from "react";
import "./style.css";
import { CartWidget } from "../CartWidget";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

export const NavBar = ({ cartQuantity = 0 }) => {
  const { itemsId } = useParams();
  return (
    <div className="App container   ">
      <nav className="container-fluid navbar navbar-expand-lg navbar-light  d-flex fixed-top navBarPanda  ">
        <NavLink
          exact
          to={"/"}
          activeClassName="active-navlink"
          className="navlink align-self-center m-3"
        >
          {" "}
          PANDA{" "}
        </NavLink>
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
            <li className="nav-item align-self-center m-3">
              <NavLink
                to={`/item`}
                activeClassName="active-navlink"
                className="navlink"
              >
                {" "}
                items{" "}
              </NavLink>
            </li>

            <li className="nav-item align-self-center m-3">
              <NavLink
                to={"/contacto"}
                activeClassName="active-navlink"
                className="navlink "
              >
                {" "}
                Contacto{" "}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-end mr-4 pr-4">
          <li className="nav-item d-flex d-flex justify-content-end">
            <NavLink
              to={"/carrito"}
              activeClassName="active-navlink"
              className="navlink"
            >
              <CartWidget />( {cartQuantity})
            </NavLink>
          </li>
        </div>
      </nav>
    </div>
  );
};
