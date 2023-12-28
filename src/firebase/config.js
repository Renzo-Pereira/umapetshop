import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbxUNlCwrS1FNmnkz9tdW2sqzaJMrILpw",
  authDomain: "uma-petshop.firebaseapp.com",
  projectId: "uma-petshop",
  storageBucket: "uma-petshop.appspot.com",
  messagingSenderId: "960862694173",
  appId: "1:960862694173:web:b50fb0890adcf7836ecff4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);