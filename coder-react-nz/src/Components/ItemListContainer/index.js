import React from "react";
import { boxes } from "../../data/data";
import { List } from "../List";
import "./style.css";

const ItemListContainer = () => {
  return (
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
