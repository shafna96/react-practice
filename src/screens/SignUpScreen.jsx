import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { AuthContext } from "../navigations/auth";
import AuthScreen from "./AuthScreen";

function SignUpScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useContext(AuthContext);

  const signUpHandler = (e) => {
    e.preventDefault();
    signUp(email, password);
    navigate("/login");
  };
  return (
    // <div className="flex-1">
    //   <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    //     <div className="w-full max-w-md space-y-8">
    //       <div>
    //         <img
    //           className="mx-auto h-12 w-auto"
    //           src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    //           alt="Your Company"
    //         />
    //         <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
    //           Sign in to your account
    //         </h2>
    //         <p className="mt-2 text-center text-sm text-gray-600">
    //           Or
    //           <a
    //             // href="#"
    //             className="font-medium text-indigo-600 hover:text-indigo-500"
    //           >
    //             start your 14-day free trial
    //           </a>
    //         </p>
    //       </div>
    //       <form className="mt-8 space-y-6" action="#" method="POST">
    //         <input type="hidden" name="remember" defaultValue="true" />
    //         <div className="-space-y-px rounded-md shadow-sm">
    //           <div>
    //             <label className="sr-only">Email address</label>
    //             <input
    //               //id="email-address"
    //               type="email"
    //               // value={email}
    //               className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //               placeholder="Email address"
    //               onChange={(e) => setEmail(e.target.value)}
    //               // name="email"
    //               // autoComplete="email"
    //               // required
    //             />
    //           </div>
    //           <div>
    //             <label className="sr-only">Password</label>
    //             <input
    //               // value={password}
    //               type="password"
    //               className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //               placeholder="Password"
    //               onChange={(e) => setPassword(e.target.value)}
    //               //  name="password"
    //               //autoComplete="current-password"
    //               // required
    //             />
    //           </div>
    //         </div>

    //         <div className="flex items-center justify-between">
    //           <div className="flex items-center">
    //             <input
    //               id="remember-me"
    //               name="remember-me"
    //               type="checkbox"
    //               className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //             />
    //             <label
    //               htmlFor="remember-me"
    //               className="ml-2 block text-sm text-gray-900"
    //             >
    //               Remember me
    //             </label>
    //           </div>

    //           <div className="text-sm">
    //             <a
    //               // href="#"
    //               className="font-medium text-indigo-600 hover:text-indigo-500"
    //             >
    //               Forgot your password?
    //             </a>
    //           </div>
    //         </div>

    //         <div>
    <AuthScreen
      onChangeEmail={(e) => setEmail(e.target.value)}
      onChangePassword={(e) => setPassword(e.target.value)}
    >
      <button
        onClick={signUpHandler}
        className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-3"
      >
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <LockClosedIcon
            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
            aria-hidden="true"
          />
        </span>
        Sign up
      </button>
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </AuthScreen>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}

export default SignUpScreen;
