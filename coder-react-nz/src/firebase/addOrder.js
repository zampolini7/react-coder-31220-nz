import { collection, addDoc } from "firebase/firestore";
import { db } from ".";

export const addOrderToFb = async (cart) => {
  try {
    const order = {
      buyer: {
        name: "Juan",
        lastName: "Perez",
        email: "n@z.com",
      },
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price, 0),
      date: new Date(),
    };

    const docRef = await addDoc(collection(db, "orders"), order);
    console.log("orden generada con el ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
