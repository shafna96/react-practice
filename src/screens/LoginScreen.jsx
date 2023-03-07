import React from "react";
import { Link } from "react-router-dom";
// import { LockClosedIcon } from "@heroicons/react/20/solid";

function LoginScreen() {
  return (
    <div className="flex-1">
      <Link to={"/"}>
        <a>LoginScreen</a>
      </Link>
    </div>
  );
}

export default LoginScreen;
