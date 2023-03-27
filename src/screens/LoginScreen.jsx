import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { AuthContext } from "../navigations/auth";
import AuthScreen from "./AuthScreen";

function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const signInHandler = (e) => {
    e.preventDefault();
    signIn(email, password);
    navigate("/");
  };

  return (
    <AuthScreen
      onChangeEmail={(e) => setEmail(e.target.value)}
      onChangePassword={(e) => setPassword(e.target.value)}
    >
      <button
        type="submit"
        onClick={signInHandler}
        className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <LockClosedIcon
            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
            aria-hidden="true"
          />
        </span>
        Sign in
      </button>
      <p>
        No account yet? <Link to="/signup">Sign up</Link>
      </p>
    </AuthScreen>
  );
}

export default LoginScreen;
