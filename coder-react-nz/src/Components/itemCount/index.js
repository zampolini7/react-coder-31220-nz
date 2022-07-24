// import { Products } from '../products/products'
import "./index.css";
import React, { useContext, useState } from "react";
import { CartContext } from "../../CartContext";

export const ItemCount = ({
  item,
  stock,
  quantityDetail,
  addQuantity,
  removeQuantity,
  setQuantityDetail,
}) => {
  const { addToCart } = useContext(CartContext);
  const handleClick = () => {
    addToCart(item.id, quantityDetail);
    setQuantityDetail(0);
  };

  return (
    <div className="Container-div-ItenCount">
      <p className="Container-p-ItenCount"> PRODUCTO X - Stock: {stock}</p>
      <div className="Container-ItemCount">
        <button className="btn-ItemCount" onClick={removeQuantity}>
          <p> - </p>
        </button>
        <p className="p-ItemCount"> {quantityDetail}</p>
        <button className="btn-ItemCount" onClick={addQuantity}>
          <p> + </p>
        </button>
      </div>
      <button
        onClick={handleClick}
        disabled={stock === 0 ? true : false}
        className="btn-agregar"
      >
        {" "}
        Agregar al carrito
      </button>
    </div>
  );
};
