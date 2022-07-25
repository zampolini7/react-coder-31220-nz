import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from ".";

export const getProduct = async (id) => {
  try {
    const querySnapshot = collection(db, "items");
    const docRef = doc(querySnapshot, id);

    const docSnapshot = await getDoc(docRef);
    return docSnapshot.data();
  } catch (error) {
    console.log(error);
    return error;
  }
};
