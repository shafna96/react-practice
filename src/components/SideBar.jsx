import React, { useState } from "react";
import Content from "./Content";
import ToggleButton from "./ToggleButton";
import { Drawer, Button } from "react-daisyui";

function SideBar() {
  const [checkbox, setcheckBox] = useState(true);
  const [visible, setvisible] = useState(false);
  const handleCheckbox = (e) => {
    setcheckBox((prevState) => !prevState);
    setvisible((prevState) => !prevState);
  };

  const Toggle = ({ checked, sideClassName, className }) => {
    return (
      <div className={className}>
        <input
          id="my-drawer"
          onChange={handleCheckbox}
          type="checkbox"
          checked={checked}
          className="drawer-toggle"
        />
        <div className="drawer-content bg-purple-50">
          <Content />
        </div>
        <div className={sideClassName}>
          <label
            htmlFor="my-drawer"
            className="drawer-overlay  bg-base-200 justify-center items-center"
          ></label>
          <ul className="menu p-4 w-48 bg-base-200 text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Toggle
        className={
          "lg:drawer lg:drawer-mobile xl:drawer xl:drawer-mobile hidden"
        }
        checked={checkbox}
        sideClassName={`${checkbox ? "drawer-side" : "hidden"}`}
      />

      <Toggle
        className="drawer drawer-mobile lg:hidden xl:hidden"
        checked={visible}
        sideClassName={"drawer-side"}
      />
    </div>
  );
}

export default SideBar;
