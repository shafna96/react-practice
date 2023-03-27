import { createContext, useContext, useState } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log(user);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log(user);
          // firestore()
          //   .collection("users")
          //   .doc(auth().currentUser.uid)
          //   .set({
          //     fname: "",
          //     lname: "",
          //     email: email,
          //     createdAt: firestore.Timestamp.fromDate(new Date()),
          //     userImg: null,
          //   });
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signIn, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
