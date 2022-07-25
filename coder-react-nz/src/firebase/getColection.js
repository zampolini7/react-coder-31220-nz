import { collection, getDocs } from "firebase/firestore";
import { db } from ".";

export const getColection = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "items"));

    const itemDataQuerySnapShot = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    return itemDataQuerySnapShot;
  } catch (error) {
    console.log(error);
    return error;
  }
};
