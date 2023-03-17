import React from "react";
import { Route, Routes } from "react-router-dom";
import ItemForm from "../components/ItemForm";
import TableList from "../components/TableList";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import LoginScreen from "../screens/LoginScreen";

function RoutesNav() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="newitem" element={<ItemForm />} />
          <Route path="itemlist" element={<TableList />} />
        </Route>
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </div>
  );
}

export default RoutesNav;
