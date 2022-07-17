import React from "react";
import "./style.css";
import { ItemCount } from "../itemCount";

export const ItemDetail = ({
  item,
  quantityDetail,
  addQuantity,
  removeQuantity,
  setQuantityDetail,
}) => {
  return (
    <div>
      <div className="item-container">
        <div className="itemDetail-div">
          <div id={item.id} className="itemDetail-div-lateral-bajo">
            <img
              src={item.img}
              alt="acá va la imagen"
              className="itemDetail-img"
            />

            <div className="container-itemDetail-div-bajo-p">
              <p className="itemDetail-div-bajo-p">
                {" "}
                Precio: $
                {quantityDetail === 0
                  ? item.precio
                  : item.precio * quantityDetail}{" "}
              </p>
              <p className="itemDetail-div-bajo-p">
                Cantidad: {quantityDetail}{" "}
              </p>
            </div>

            {/* <button className="btn-detail">Comprar ahora </button> */}
          </div>
          <div className="itemDetail-div-Lateral">
            <h2 className="itemDetail-h2"> Nombre : {item.nombre} </h2>
            <p className="itemDetail-div-Lateral-p">
              {" "}
              Contenido: {item.contenido}{" "}
            </p>

            <ItemCount
              classname="itemDetail-itemCount"
              item={item}
              stock={item.stock}
              quantityDetail={quantityDetail}
              addQuantity={addQuantity}
              removeQuantity={removeQuantity}
              setQuantityDetail={setQuantityDetail}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
