import React, { useContext } from "react";
import { Cart } from "../Cart";
import { CartContext } from "../CartContext";
import { addOrderToFb } from "../firebase/addOrder";
import "./style.css";

const CartContainer = () => {
  const {
    cart,
    addToCart,
    RemoveFromCart,
    quantity,
    setCart,
    setQuantity,
    Clear,
  } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrderToFb(cart);
    setTimeout(() => {
      setCart([]);
      setQuantity(0);
    }, 3000);
  };

  return (
    <div className="container">
      <div className="row">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div className="col-6">
              <Cart
                item={item}
                imageId={item.imageId}
                stock={item.stock}
                title={item.title}
                categoryId={item.categoryId}
                description={item.description}
                id={item.id}
                price={item.price}
                quantity={item.quantity}
                RemoveFromCart={RemoveFromCart}
              />
            </div>
          ))
        ) : (
          <div className="text-center text-cart-empty">
            <h1>No hay productos en el carrito</h1>
          </div>
        )}
        {cart.length > 0 ? (
          <div className="row">
            <div className="col-12">
              <button className="btn btn-success" onClick={handleSubmit}>
                <h2>Terminar compra :)</h2>
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartContainer;
