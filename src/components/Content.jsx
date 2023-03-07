import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import ItemForm from "./ItemForm";
import TableList from "./TableList";

function Content({ title }) {
  return (
    <div className="p-5">
      <h1 className="pb-2 text-2xl">{title}</h1>
      <Outlet />
      {/* <Routes>
        <Route path="newitem" element={<ItemForm />} />
        <Route path="itemlist" element={<TableList />} />
      </Routes> */}
    </div>
  );
}

export default Content;
