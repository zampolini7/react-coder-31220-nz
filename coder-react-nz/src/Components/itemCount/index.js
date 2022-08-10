// import { Products } from '../products/products'
import "./index.css";
import React, { useContext, useEffect, useState } from "react";
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
    console.log(item);
    addToCart(item.id, quantityDetail);
    setQuantityDetail(0);
  };

  useEffect(() => {
    console.log(stock);
  }, [addToCart]);

  return (
    <div className="Container-div-ItenCount">
      <p className="Container-p-ItenCount"> PRODUCTO X - Stock: {stock}</p>
      <div className="Container-ItemCount ms-5">
        <button className="btn-ItemCount" onClick={removeQuantity}>
          <p> - </p>
        </button>
        <p className="p-ItemCount"> {quantityDetail}</p>
        <button className="btn-ItemCount" onClick={addQuantity}>
          <p> + </p>
        </button>
        <div className="w-100 d-flex div-btn-agregar ms-5">
          <button
            onClick={handleClick}
            disabled={
              stock === 0 ? true : false || quantityDetail === 0 ? true : false
            }
            className="btn-agregar"
          >
            {" "}
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
