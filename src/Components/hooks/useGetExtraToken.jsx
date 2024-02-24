/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const useGetExtraToken = () => {
  const [extraToken, setExtraToken] = useState();

  const getExtraToken = async () => {
    let extraTokens = [];
    const q = query(collection(db, "AddExtraToken"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      extraTokens.push(doc.data());
    });
    setExtraToken(extraTokens);
  };
  return { extraToken, setExtraToken, getExtraToken };
};
