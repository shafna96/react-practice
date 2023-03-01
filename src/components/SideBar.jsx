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

  return (
    <div>
      <div className="lg:drawer lg:drawer-mobile xl:drawer xl:drawer-mobile hidden">
        <input
          id="my-drawer"
          type="checkbox"
          checked={checkbox}
          className="drawer-toggle"
          onChange={handleCheckbox}
        />
        <div className="drawer-content bg-purple-50">
          <Content />
        </div>
        <div className={`${checkbox ? "drawer-side" : "hidden"}`}>
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
      <div className="drawer lg:hidden xl:hidden">
        <input
          id="my-drawer"
          type="checkbox"
          checked={visible}
          className="drawer-toggle"
          onChange={handleCheckbox}
        />
        <div className="drawer-content bg-purple-50">
          <Content />
        </div>
        {/* <div className={`${visible ? "drawer-side" : "hidden"}`}> */}
        <div className="drawer-side">
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
    </div>
  );
}

export default SideBar;
