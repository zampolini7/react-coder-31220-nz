import React from "react";
import { Item } from "../Item";

export const List = ({ data, addToCart }) => {
  return data.map((item) => {
    return (
      <Item
        key={item.id}
        id={item.id}
        nombre={item.nombre}
        precio={item.precio}
        contenido={item.contenido}
        categoria={item.categoria}
        quantity={item.quantity}
        addToCart={addToCart}
      />
    );
  });
};
