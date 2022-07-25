import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../CartContext";
import { getColection } from "../../firebase/getColection";
import { getColectionByCategory } from "../../firebase/getColectionByCategory";
import { List } from "../List";
import "./style.css";

const ItemListContainer = () => {
  const [dataListContainer, setDataListContainer] = useState("");
  const { catid } = useParams();
  const { addToCart, setData, data } = useContext(CartContext);

  useEffect(() => {
    getColection().then((data) => {
      setData(data);
    });
  }, []);

  useEffect(() => {
    if (catid) {
      getColectionByCategory(catid).then((d) => {
        setDataListContainer(d);
      });
    } else {
      setDataListContainer(data);
    }
  }, [catid]);

  return dataListContainer === "" ? (
    <div>Cargando...</div>
  ) : (
    <div className="container bg-w-custom">
      <div className="d-flex row flex-row ">
        <div className="d-flex col-12 flex-wrap ">
          <List data={dataListContainer} addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
