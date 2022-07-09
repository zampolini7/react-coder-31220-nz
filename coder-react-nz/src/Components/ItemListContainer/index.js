import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { boxes } from "../../data/data";
import { List } from "../List";
import "./style.css";

const ItemListContainer = () => {
  const [data, setData] = useState("");
  const { catid } = useParams();
  const taskPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const myData = catid
        ? boxes.filter((box) => box.categoria === catid)
        : boxes;

      resolve(myData);
    }, 3000); // 3 segundos
  });
  taskPromise.then((res) => {
    setData(res);
    console.log(res);
  });

  return data === "" ? (
    <div>Cargando...</div>
  ) : (
    <div className="container bg-w-custom">
      <div className="d-flex row flex-row ">
        <div className="d-flex col-12 flex-wrap ">
          <List data={data} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
