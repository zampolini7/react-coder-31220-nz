import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from ".";

export const getColectionByCategory = async (catId) => {
  const q = query(collection(db, "items"), where("categoryId", "==", catId));

  const myData = await getDocs(q);
  myData.forEach((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return myData;
};
