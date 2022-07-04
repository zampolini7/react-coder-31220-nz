import React from "react";
import { ItemDetail } from "../itemDetail";
import "./style.css";

export const Item = (props) => {
  return (
    <div class="card col-3 d-flex m-2 ">
      <img class="card-img-top" src={props.img} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title"> {props.nombre}</h5>

        <p> {props.contenido}</p>

        <a
          id={props.id}
          class="btn text-light bg-dark d-flex justify-content-center btnComprar"
        >
          Agregar al carrito x {props.precio}
        </a>
      </div>
    </div>
  );
};
