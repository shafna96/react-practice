import React, { useState, useContext } from "react";
import Content from "./Content";
import { AuthContext } from "../navigations/auth";

import { Link, useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();

  const { logout } = useContext(AuthContext);

  const [checkbox, setcheckBox] = useState(true);
  const [visible, setvisible] = useState(false);
  const handleCheckbox = (e) => {
    setcheckBox((prevState) => !prevState);
    setvisible((prevState) => !prevState);
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
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
        <div className="drawer-content bg-purple-50 ">
          <Content />
        </div>
        <div className={sideClassName}>
          <label
            htmlFor="my-drawer"
            className="drawer-overlay  bg-base-200 justify-center items-center"
          ></label>
          <ul className="menu p-4 w-48 bg-base-200 text-base-content">
            <li>
              <Link to={"/"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"newitem"}>New Item</Link>
            </li>
            <li>
              <Link to={"itemlist"}>Item List</Link>
            </li>
            <li>
              {/* <Link to={"/login"}>logout</Link> */}
              <button onClick={logoutHandler}>logout</button>
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
