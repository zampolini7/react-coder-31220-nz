import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../CartContext";
import { getColection } from "../../firebase/getColection";
import { getColectionByCategory } from "../../firebase/getColectionByCategory";
import LoaderCards from "../../LoaderCards";
import { List } from "../List";
import "./style.css";

const ItemListContainer = () => {
  const [dataListContainer, setDataListContainer] = useState(null);
  const { catid } = useParams();
  const { addToCart, setData, data } = useContext(CartContext);

  useEffect(() => {
    if (catid) {
      console.log("catid", catid);
      getColectionByCategory(catid).then((data) => {
        console.log(data);
        setDataListContainer(data);
        setData(data);
      });
    } else {
      getColection().then((data) => {
        setDataListContainer(data);
        console.log(data);
        setData(data);
      });
    }
  }, [catid]);

  return dataListContainer === null ? (
    <div className="container container-loader-cust ">
      <div className="d-flex row flex-row ">
        <div className="d-flex col-12 flex-wrap ">
          <LoaderCards />
        </div>
      </div>
    </div>
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
