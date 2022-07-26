import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { useState } from "react";
import { db } from ".";

export const getColectionByCategory = async (catId) => {
  const datafiltrada = [];
  const q = query(collection(db, "items"), where("categoryId", "==", catId));

  getDocs(q).then((data) => {
    data.docs.map((item) => {
      datafiltrada.push(item.data());
    });
  });

  return datafiltrada;

  // const myData = await getDocs(q);
  // myData.forEach((doc) => {
  //   return {
  //     id: doc.id,
  //     ...doc.data(),
  //   };
  // });
  // console.log(myData);
  // return myData;
};
