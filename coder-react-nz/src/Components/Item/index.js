import React from "react";
import { Link } from "react-router-dom";
import { ItemDetail } from "../itemDetail";
import "./style.css";

export const Item = (props) => {
  return (
    <div class="card col-3 d-flex m-2 ">
      <img class="card-img-top" src={props.img} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title"> {props.nombre}</h5>
        <span>{props.categoria}</span>

        <p> {props.contenido}</p>

        <a
          id={props.id}
          class="btn text-light bg-dark d-flex justify-content-center btnComprar"
        >
          Agregar al carrito x {props.precio}
        </a>
        <button
          id={props.id}
          class="btn text-light bg-dark d-flex justify-content-center btnComprar"
        >
          <Link to={`/item/${props.id}`}>Ver detalle del producto</Link>
        </button>
      </div>
    </div>
  );
};
