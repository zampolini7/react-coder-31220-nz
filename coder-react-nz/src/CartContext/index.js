import React, { createContext, useEffect, useState } from "react";
import { boxes } from "../data/data";
import { getColection } from "../firebase/getColection";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const addToCart = (itemId, quantityDetail) => {
    let foundItemInCart = data.filter((e) => e.id === itemId);

    let itemInCart = cart.find((e) => e.id === itemId);
    console.log(cart);

    if (itemInCart === undefined && quantityDetail > 0) {
      if (quantityDetail >= 1) {
        console.log(foundItemInCart[0]);
        foundItemInCart[0].quantity += quantityDetail;
        foundItemInCart[0].stock -= quantityDetail;
        setQuantity(quantity + quantityDetail);

        setCart([...cart, foundItemInCart[0]]);
      } else {
        itemInCart.quantity += 1;
        itemInCart.stock -= 1;
        cart.splice(cart.indexOf(itemInCart), 1, itemInCart);
        setQuantity(quantity + 1);
      }
    } else if (!itemInCart && !quantityDetail) {
      foundItemInCart[0].quantity += 1;
      foundItemInCart[0].stock -= 1;
      setQuantity(quantity + 1);
      setCart([...cart, foundItemInCart[0]]);
      console.log(cart);
    } else {
      if (quantityDetail >= 1) {
        itemInCart.quantity += quantityDetail;
        itemInCart.stock -= quantityDetail;
        cart.splice(cart.indexOf(itemInCart), 1, itemInCart);
        setQuantity(quantity + quantityDetail);
      } else {
        setQuantity(quantity + 1);
        itemInCart.stock -= 1;
        itemInCart.quantity += 1;
        cart.splice(cart.indexOf(itemInCart), 1, itemInCart);
      }
    }
  };

  const RemoveFromCart = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId.id);
    setCart(newCart);

    setQuantity(quantity - itemId.quantity);
  };

  const Clear = () => {
    setCart([]);
    setQuantity([]);
  };

  const isInCart = (item) => {
    if (item.id === cart.id) {
      setCart(...cart, item.Quantity);
    } else {
      setCart([...cart, item]);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        RemoveFromCart,
        quantity,
        setCart,
        setQuantity,
        Clear,
        setData,
        data,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
