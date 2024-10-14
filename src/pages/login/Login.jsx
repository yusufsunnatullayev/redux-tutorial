import React from "react";

function Login() {
  return (
    <div className="flex flex-col gap-10 items-center py-20 w-full h-screen bg-gray-100">
      <form className="w-1/4 bg-gray-400 flex flex-col gap-5 p-5 rounded-md items-start">
        <h1 className="text-3xl font-semibold self-center mb-5 text-white">
          Log in
        </h1>
        <input
          className="py-1 w-full px-3 rounded-sm outline-none"
          type="email"
          placeholder="email"
        />
        <input
          className="py-1 w-full px-3 rounded-sm outline-none"
          type="password"
          placeholder="password"
        />
        <button className="mt-3 w-full rounded-sm py-2 px-3 text-base font-semibold text-white bg-gray-600 hover:bg-gray-500 duration-200">
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;
