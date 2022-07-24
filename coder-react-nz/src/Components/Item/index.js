import React from "react";
import { Link } from "react-router-dom";
import { ItemDetail } from "../itemDetail";
import "./style.css";

export const Item = ({
  imageId,
  stock,
  title,
  categoryId,
  description,
  id,
  price,
  addToCart,
}) => {
  return (
    <div class="card col-3 d-flex m-2 ">
      <img class="card-img-top" src={imageId} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title"> {title}</h5>
        <span>{categoryId}</span>

        <p> {description}</p>
        {stock === 0 ? (
          <p>No hay stock</p>
        ) : (
          <a
            id={id}
            class="btn text-light bg-dark d-flex justify-content-center btnComprar"
            onClick={() => addToCart(id)}
            disabled={stock === 0 ? true : false}
          >
            Agregar al carrito x {price}
          </a>
        )}
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
