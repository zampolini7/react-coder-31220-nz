import React from "react";
import { Item } from "../Item";

export const List = ({ data, addToCart }) => {
  return data.map((item) => {
    return (
      <Item
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        imageId={item.imageId}
        description={item.description}
        categoryId={item.categoryId}
        quantity={item.quantity}
        addToCart={addToCart}
      />
    );
  });
};
