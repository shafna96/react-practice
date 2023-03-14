import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

function Content() {
  return (
    <div className="p-5 ">
      <Outlet />
    </div>
  );
}

export default Content;
