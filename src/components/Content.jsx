import React from "react";
import ItemForm from "./ItemForm";
import TableList from "./TableList";

function Content({ title }) {
  return (
    <div className="p-5">
      <h1 className="pb-2 text-2xl">{title}</h1>
      {/* <ItemForm /> */}
      <TableList />
    </div>
  );
}

export default Content;
