import React, { useState } from "react";
import { ItemCount } from "../itemCount";

const ItemCountContainer = () => {
  const initial = 1;
  const [contador, setContador] = useState(initial);
  const stock = 15;

  const sumar = () => {
    if (stock === 0) return;
    if (contador >= stock) return;
    setContador(contador + 1);
  };

  const restar = () => {
    if (stock === 0) return;
    if (contador < 1) return;
    setContador(contador - 1);
  };

  const onAdd = () => {
    if (stock === 0) return;
    console.log(`Agregamos ${contador} cantidades de tu selección al carrito`);
  };
  return (
    <ItemCount
      stock={stock}
      initial={initial}
      sumar={sumar}
      restar={restar}
      contador={contador}
      onAdd={onAdd}
    />
  );
};

export default ItemCountContainer;
