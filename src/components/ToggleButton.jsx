import React, { useState } from "react";

function ToggleButton() {
  return (
    <div>
      {/* className="drawer-content flex flex-col items-center justify-center" */}
      <label htmlFor="my-drawer" className="drawer-button">
        {/* lg:hidden */}
        <i className="bi bi-list text-2xl"></i>
      </label>
    </div>
  );
}

export default ToggleButton;
