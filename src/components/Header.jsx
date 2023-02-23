import React from "react";
import ToggleButton from "./ToggleButton";

function Header() {
  return (
    <div className="flex bg-purple-400 text-white">
      <a className="flex min-h-16 w-48 justify-center text-center items-center bg-purple-500 capitalize text-xl">
        daisy UI
      </a>
      <div className="navbar">
        <div className="flex-1">
          {/* <i className="bi bi-list text-2xl"></i> */}
          <ToggleButton />
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="data:image/jpeg;base64,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" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
