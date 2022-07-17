import React from "react";
import { Link } from "react-router-dom";
import { ItemDetail } from "../itemDetail";
import "./style.css";

export const Item = ({
  img,
  nombre,
  categoria,
  contenido,
  id,
  precio,
  addToCart,
}) => {
  return (
    <div class="card col-3 d-flex m-2 ">
      <img class="card-img-top" src={img} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title"> {nombre}</h5>
        <span>{categoria}</span>

        <p> {contenido}</p>

        <a
          id={id}
          class="btn text-light bg-dark d-flex justify-content-center btnComprar"
          onClick={() => addToCart(id)}
        >
          Agregar al carrito x {precio}
        </a>
        <button
          id={id}
          class="btn text-light bg-dark d-flex justify-content-center btnComprar"
        >
          <Link to={`/item/${id}`}>Ver detalle del producto</Link>
        </button>
      </div>
    </div>
  );
};
