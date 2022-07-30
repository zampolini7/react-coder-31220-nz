import React, { useContext } from "react";
import { Cart } from "../Cart";
import { CartContext } from "../CartContext";
import { addOrderToFb } from "../firebase/addOrder";

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
          <div className="text-center">
            <h1>No hay productos en el carrito</h1>
          </div>
        )}
        {cart.length > 0 ? (
          <div className="row">
            <div className="col-12">
              <button
                className="btn btn-success"
                onClick={() => addOrderToFb(cart)}
              >
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
