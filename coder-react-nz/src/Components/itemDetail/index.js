import React from "react";
import "./style.css";
import { ItemCount } from "../itemCount";

export const ItemDetail = ({ item }) => {
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
              <p className="itemDetail-div-bajo-p"> Precio: ${item.precio} </p>
              <p className="itemDetail-div-bajo-p">
                Cantidad: {item.cantidad}{" "}
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

            <ItemCount classname="itemDetail-itemCount" stock={item.cantidad} />
          </div>
        </div>
      </div>
    </div>
  );
};
