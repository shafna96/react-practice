import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

function Content({ title }) {
  return (
    <div className="p-5">
      <h1 className="pb-2 text-2xl">{title}</h1>
      <Outlet />
    </div>
  );
}

export default Content;
