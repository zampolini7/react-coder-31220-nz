import React, { useState } from "react";
import { boxes } from "../../data/data";
import { List } from "../List";
import "./style.css";

const ItemListContainer = () => {
  const [data, setData] = useState("");

  const taskPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(boxes);
    }, 3000); // 3 segundos
  });
  taskPromise.then(() => {
    setData(boxes);
  });

  return data === "" ? (
    <div>Cargando...</div>
  ) : (
    <div className="container bg-w-custom">
      <div className="d-flex row flex-row ">
        <div className="d-flex col-12 flex-wrap ">
          <List data={boxes} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
