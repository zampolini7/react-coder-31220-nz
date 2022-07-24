import React from "react";
import "./style.css";
export const Cart = ({
  imageId,
  stock,
  title,
  categoryId,
  description,
  id,
  price,
  quantity,
  RemoveFromCart,
  item,
}) => {
  return (
    <div class="card col-8  d-flex m-2">
      <img class="card-img-top" src={imageId} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title"> {title}</h5>
        <p> Categoria: {categoryId}</p>

        <p> {description}</p>
        <p>cantidad a comprar: {quantity}</p>
        <p>Precio por unidad de este producto: {price}</p>

        <p>Precio total de este producto: {price * quantity}</p>
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
