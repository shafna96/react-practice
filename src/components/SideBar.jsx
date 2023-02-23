import React, { useState } from "react";
import Content from "./Content";
import ToggleButton from "./ToggleButton";

function SideBar() {
  const [checkbox, setcheckBox] = useState(true);
  const handleCheckbox = (e) => {
    setcheckBox((prevState) => !prevState);
  };
  return (
    <div>
      {checkbox ? (
        <div className="drawer drawer-mobile">
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            onClick={handleCheckbox}
          />
          <div className="drawer-content bg-purple-50">
            <Content />
          </div>
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
      ) : (
        <div className="drawer">
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            onClick={handleCheckbox}
          />
          <div className="drawer-content bg-purple-50">
            <Content />
          </div>
          {/* <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              className="drawer-overlay  bg-base-100 justify-center items-center"
            ></label>
            <ul className="menu p-4 w-48 bg-base-200 text-base-content">
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default SideBar;
