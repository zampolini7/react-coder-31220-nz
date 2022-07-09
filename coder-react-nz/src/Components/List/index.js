import React from "react";
import { Item } from "../Item";

export const List = ({ data }) => {
  console.log(data);
  return data.map((item) => {
    return (
      <Item
        key={item.id}
        id={item.id}
        nombre={item.nombre}
        precio={item.precio}
        contenido={item.contenido}
        categoria={item.categoria}
        cantidad={item.cantidad}
      />
    );
  });
};
