// import { Products } from '../products/products'
import "./index.css";
import React, { useContext, useState } from "react";
import { CartContext } from "../../CartContext";

export const ItemCount = ({ stock, contador, sumar, restar, onAdd }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="Container-div-ItenCount">
      <p className="Container-p-ItenCount"> PRODUCTO X - Stock: {stock}</p>
      <div className="Container-ItemCount">
        <button className="btn-ItemCount" onClick={restar}>
          <p> - </p>
        </button>
        <p className="p-ItemCount"> {contador}</p>
        <button className="btn-ItemCount" onClick={sumar}>
          <p> + </p>
        </button>
      </div>
      <button onClick={addToCart} className="btn-agregar">
        {" "}
        Agregar al carrito
      </button>
    </div>
  );
};
