import { collection, addDoc } from "firebase/firestore";
import { db } from ".";
import { batchStock } from "./batchStock";

export const addOrderToFb = async (cart) => {
  try {
    const order = {
      buyer: {
        name: "Juan",
        lastName: "Perez",
        email: "n@z.com",
      },
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      date: new Date(),
    };

    const docRef = await addDoc(collection(db, "orders"), order);
    console.log("orden generada con el ID: ", docRef.id);
    alert("orden generada con el ID: " + docRef.id);
    // const newData = await batchStock(cart);
    // console.log(newData);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
