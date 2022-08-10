import { collection, writeBatch } from "firebase/firestore";
import { db } from ".";

export const batchStock = async (cart) => {
  const batch = writeBatch(db);

  cart.forEach((item) => {
    console.log(item.id);
    let ref = collection(db, "products").doc(item.id);
    batch.update(ref, { stock: item.stock - item.quantity });
  });
  const newData = await batch.commit();
  console.log(newData);
  return newData;
};
