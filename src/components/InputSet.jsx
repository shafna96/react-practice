import React from "react";

const Input = ({ label, placeholder, input, select }) => {
  return (
    <div className="form-control w-full max-w-xs p-5">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      {input && (
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered w-full max-w-xs"
        />
      )}
      {select && (
        <div className="flex border-2 rounded-lg">
          <div className="flex-1">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                -Select-
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="flex justify-center items-center px-2">
            <i className="bi bi-plus-square"></i>
          </div>
        </div>
      )}
    </div>
  );
};

function InputSet({ label, placeholder, input, select }) {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      input={input}
      select={select}
    />
  );
}

export default InputSet;
