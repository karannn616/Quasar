import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "newpanel-cb8e9.firebaseapp.com",
  projectId: "newpanel-cb8e9",
  storageBucket: "newpanel-cb8e9.appspot.com",
  messagingSenderId: "248799344375",
  appId: "1:248799344375:web:67d8c6ad221324945dc5f2",
  measurementId: "G-SGZ0MPVG6D",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
