import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <label className="text-center">
        <p className="font-semibold">Welcome Back</p>
        <small>Sign-in with credentials</small>
      </label>

      <form className="flex flex-col gap-2">
        <input
          type="email"
          className="border p-2 outline-none focus:border focus:border-slate-600 rounded-lg"
          placeholder="Email"
        />
        <input
          type="password"
          className="border p-2 outline-none focus:border focus:border-slate-600 rounded-lg"
          placeholder="Password"
        />
        <NavLink
          to={"/auth/forgot-password"}
          className="text-sm text-end text-indigo-800"
        >
          Forgot Password ?
        </NavLink>
        <button className="p-2 bg-indigo-500 rounded-lg text-white">
          Sign In
        </button>
      </form>

      <span className="text-sm text-center">
        You don't have account ?{" "}
        <NavLink className="text-indigo-800">Sign Up</NavLink>
      </span>
    </div>
  );
};

export default Login;
