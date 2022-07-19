import React from "react";
import "./style.css";
export const Cart = ({
  img,
  stock,
  nombre,
  categoria,
  contenido,
  id,
  precio,
  quantity,
  RemoveFromCart,
  item,
}) => {
  return (
    <div class="card col-8  d-flex m-2">
      <img class="card-img-top" src={img} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title"> {nombre}</h5>
        <p> Categoria: {categoria}</p>

        <p> {contenido}</p>
        <p> stock actual: {stock}</p>
        <p>cantidad a comprar: {quantity}</p>
        <p>Precio total de este producto: {precio}</p>
        <button
          onClick={() => RemoveFromCart(item)}
          id={id}
          class="btn text-light bg-dark d-flex justify-content-center btnComprar"
        >
          Eliminar del carrito
        </button>
      </div>
    </div>
  );
};
