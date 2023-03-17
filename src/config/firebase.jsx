import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDLy5HO8XjAvupOwQHoffjUWViQcHZpZkg",
  authDomain: "react-practice-a4036.firebaseapp.com",
  projectId: "react-practice-a4036",
  storageBucket: "react-practice-a4036.appspot.com",
  messagingSenderId: "621862244141",
  appId: "1:621862244141:web:00906d4a946d97422b8da4",
  measurementId: "G-LXNDK3XM1E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
