import React, { useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { Route, Routes } from "react-router-dom";
import ItemForm from "../components/ItemForm";
import TableList from "../components/TableList";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { AuthContext } from "./auth";
import AuthScreen from "../screens/AuthScreen";
import OnBoardScreen from "../screens/OnBoardScreen";

function RoutesNav() {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  // const onAuthStateChanged = user => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // };

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <div>
      <Routes>
        {user ? (
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="newitem" element={<ItemForm />} />
            <Route path="itemlist" element={<TableList />} />
          </Route>
        ) : (
          <Route>
            <Route path="/signup" element={<SignUpScreen />} />
            <Route path="/login" element={<LoginScreen />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default RoutesNav;
