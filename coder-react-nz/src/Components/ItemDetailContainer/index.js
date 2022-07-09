import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { boxes } from "../../data/data";
import { ItemDetail } from "../itemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  console.log(id);
  const taskPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // const myData = id ? boxes.filter((box) => box.id === id) : boxes[1];
      // console.log(myData);
      const myData = boxes.filter((box) => box.id == id);
      console.log(myData);

      const myItem = myData[0];

      resolve(myItem);
    }, 3000); // 3 segundos
  });
  taskPromise.then((res) => {
    setItem(res);
    console.log(item);
  });

  return item === "" ? <div>Cargando...</div> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;
