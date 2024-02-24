import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
export const useAddTransaction = () => {
  const collectionRef = collection(db, "transaction");
  async function writeUserTransaction(account, amount) {
    await setDoc(doc(collectionRef), {
      amountOfToken: amount,
      account,
      createdAt: Date.now(),
    });
  }
  return {
    writeUserTransaction,
  };
};
