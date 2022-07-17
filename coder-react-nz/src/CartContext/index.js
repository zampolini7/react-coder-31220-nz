import React, { createContext, useEffect, useState } from "react";
import { boxes } from "../data/data";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    console.log(cart);
    console.log(quantity);
  }, [cart]);
  const taskPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const myData = boxes;
      resolve(myData);
    }, 3000); // 3 segundos
  });
  taskPromise.then((res) => {
    setData(res);
  });
  // let foundItemInCart = -1;

  const addToCart = (itemId) => {
    let foundItemInCart = data.filter((e) => e.id === itemId);
    // setCart([...cart, foundItemInCart[0]]);

    let itemInCart = cart.find((e) => e.id === itemId);
    console.log(itemInCart);

    if (itemInCart === undefined) {
      setCart([...cart, foundItemInCart[0]]);
      setQuantity(quantity + 1);
      console.log(cart);
      console.log(quantity);
    } else {
      setQuantity(quantity + 1);
      itemInCart.quantity += 1;
      cart.splice(cart.indexOf(itemInCart), 1, itemInCart);
      console.log(cart);
      console.log(quantity);
    }

    // if (itemInCart) {
    //   setCart((prevCart) => {
    //     return prevCart.map((e) => {
    //       if (e.id === itemId) {
    //         e.quantity += 1;
    //       }
    //       return e;
    //     });
    //   });
    // } else {
    //   setCart((prevCart) => [...prevCart, foundItemInCart[0]]);
    //   console.log(cart);
    //   console.log(quantity);
    // }
    // setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const RemoveFromCart = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId.id);
    setCart(newCart);
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
