import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-md shadow-blue-600">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form noValidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <div className="flex justify-end text-xs dark:text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-">
          <button
            aria-label="Log in with Google"
            className="p-3 rounded-sm text-3xl"
          >
            <FcGoogle />
          </button>
          <button
            aria-label="Log in with GitHub"
            className="p-3 rounded-sm text-3xl"
          >
            <FaGithub />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Do not have an account?
          <Link className="link-primary" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
