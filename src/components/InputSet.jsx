import React from "react";

const Input = ({ label, placeholder, input, select, date }) => {
  return (
    <div className="w-full form-control p-2">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      {input && (
        <div className="flex w-full border rounded-md">
          {date && (
            <div className="flex justify-center items-center px-2 border-r">
              <i className="bi bi-calendar"></i>
            </div>
          )}
          <input
            type="text"
            placeholder={placeholder}
            className="input rounded-md w-full"
          />
        </div>
      )}
      {select && (
        <div className="flex w-full border rounded-md">
          <select className="flex-1 select rounded-md w-full">
            <option disabled selected>
              -Select-
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <div className="flex justify-center items-center px-2 border-l">
            <i className="bi bi-plus-square"></i>
          </div>
        </div>
      )}
    </div>
  );
};

function InputSet({ label, placeholder, input, select, date }) {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      input={input}
      select={select}
      date={date}
    />
  );
}

export default InputSet;
