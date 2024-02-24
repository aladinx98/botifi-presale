// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBCUzlS0eHa38NZFNdgCgtPF_UZv6BFWhw",
  authDomain: "presale-botifi.firebaseapp.com",
  projectId: "presale-botifi",
  storageBucket: "presale-botifi.appspot.com",
  messagingSenderId: "579866474923",
  appId: "1:579866474923:web:b0f9439ba6b51c760ffaee",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const msg = getMessaging(app);
