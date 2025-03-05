import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCF0Q-P5n1bCs5gOm1asSIczvKfRr0ujzI",
  authDomain: "backend-68530.firebaseapp.com",
  projectId: "backend-68530",
  storageBucket: "backend-68530.firebasestorage.app",
  messagingSenderId: "3162891127",
  appId: "1:3162891127:web:b00a4f780c9360c268f772",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
