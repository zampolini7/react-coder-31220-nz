import { collection, getDocs } from "firebase/firestore";
import { db } from ".";

export const getColection = async () => {
  console.log(db);

  try {
    const querySnapshot = await getDocs(collection(db, "items"));

    const itemDataQuerySnapShot = querySnapshot.docs.map((doc) => {
      console.log(doc.id);
      // return doc.data();
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
