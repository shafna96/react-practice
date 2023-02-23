import React from "react";
import Content from "./Content";
import ToggleButton from "./ToggleButton";

function SideBar() {
  return (
    <div className="drawer  drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <Content />

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          className="drawer-overlay justify-center items-center"
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
}

export default SideBar;
