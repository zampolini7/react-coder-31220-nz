import React, { useContext } from "react";
import "./style.css";
import { CartWidget } from "../CartWidget";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import { CartContext } from "../../CartContext";

export const NavBar = () => {
  const { quantity } = useContext(CartContext);
  return (
    <div className=" ">
      <nav className="container-fluid navbar navbar-expand-lg navbar-light  d-flex fixed-top navBarPanda  ">
        <NavLink
          exact
          to={"/"}
          activeClassName="active-navlink"
          className="navlink align-self-center m-3"
        >
          <h5>PANDA</h5>
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
                <h5>items</h5>
              </NavLink>
            </li>

            <li className="nav-item align-self-center m-3">
              <NavLink
                to={"/contacto"}
                activeClassName="active-navlink"
                className="navlink "
              >
                <h5>Contacto</h5>
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
              {quantity > 0 ? (
                <>
                  <CartWidget />
                  {quantity}
                </>
              ) : (
                ""
              )}
            </NavLink>
          </li>
        </div>
      </nav>
    </div>
  );
};
