import React from "react";
import InputSet from "./InputSet";

function ItemForm() {
  return (
    <div className="w-full p-3 bg-white  border rounded border-t-4 border-t-purple-600">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <InputSet label={"Item Name"} input />
        <InputSet label={"Item Generic Name"} input />
        <InputSet label={"Brand"} select />
        <InputSet label={"Category"} select />
        <InputSet label={"Unit"} select />
        <InputSet label={"SKU"} input />
        <InputSet label={"MSN"} input />
        <InputSet label={"Minimum Qty"} input />
        <InputSet label={"Lot Number"} input />
        <InputSet label={"Lot Number"} input date />
      </div>
    </div>
  );
}

export default ItemForm;
