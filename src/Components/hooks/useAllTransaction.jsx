/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const useAllTransaction = () => {
  const [allTransaction, setAllTransaction] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const GetAllTransaction = async () => {
    let extraTokens = [];
    const q = query(collection(db, "transaction"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      extraTokens.push(doc.data());
    });
    console.log(extraTokens, "token");
    setAllTransaction(extraTokens);
  };
  const GetTotalAmount = async () => {
    console.log(allTransaction);
    const total = allTransaction.reduce((accumulator, currentItem) => {
      console.log(currentItem.amountOfToken);
      // const amount = parseInt(currentItem.amountOfToken, 2);
      return accumulator + Number(currentItem.amountOfToken);
    }, 0);
    console.log(total, "amount");
    setTotalAmount(total.toFixed(2));
  };
  return { totalAmount, allTransaction, GetAllTransaction, GetTotalAmount };
};
