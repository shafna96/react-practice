import React from "react";
import InputSet from "./InputSet";

function ItemForm() {
  return (
    <div className="w-full bg-white m-5 border rounded ">
      <div className="grid lg:grid-cols-3">
        <InputSet label={"Item Name"} input />
        <InputSet label={"Item Generic Name"} input />
        <InputSet label={"Brand"} select />
      </div>
    </div>
  );
}

export default ItemForm;
