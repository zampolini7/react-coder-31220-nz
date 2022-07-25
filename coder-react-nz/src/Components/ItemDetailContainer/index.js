import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../CartContext";
import { boxes } from "../../data/data";
import { getProduct } from "../../firebase/getProduct";
import { ItemDetail } from "../itemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [quantityDetail, setQuantityDetail] = useState(0);
  const { cart } = useContext(CartContext);

  const addQuantity = () => {
    if (item.stock > 0 && quantityDetail < item.stock) {
      setQuantityDetail(quantityDetail + 1);
      console.log(cart);
    } else {
      alert("No hay stock");
      console.log(cart);
    }
  };
  const removeQuantity = () => {
    if (quantityDetail <= 0) {
      console.log("La cantidad ya es 0");
    } else {
      setQuantityDetail(quantityDetail - 1);
    }
  };

  useEffect(() => {
    getProduct(id)
      .then((data) => {
        setItem(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return item === "" ? (
    <div>Cargando...</div>
  ) : (
    <ItemDetail
      item={item}
      addQuantity={addQuantity}
      removeQuantity={removeQuantity}
      quantityDetail={quantityDetail}
      setQuantityDetail={setQuantityDetail}
    />
  );
};

export default ItemDetailContainer;
