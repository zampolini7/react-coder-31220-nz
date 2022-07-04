import React, { useState } from "react";
import { ItemDetail } from "../itemDetail";

const ItemDetailContainer = () => {
  const data = {
    id: 1,
    nombre: "DeliBox",
    precio: 3650,
    contenido:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    img: "https://picsum.photos/200/300",

    cantidad: 1,
  };

  const [item, setItem] = useState("");

  const taskPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 6000); // 3 segundos
  });
  taskPromise.then(() => {
    setItem(data);
  });

  return item === "" ? <div>Cargando...</div> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;
