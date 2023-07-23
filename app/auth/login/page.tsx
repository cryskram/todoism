"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { FaGoogle, FaGithub } from "react-icons/fa";

const LoginPage = () => {
  const handleAuth = (provider: string) => {
    signIn(provider, { callbackUrl: "/" });
  };
  return (
    <div className="flex mt-20 flex-col justify-center">
      <div>
        <h1 className="text-4xl font-semibold text-center">Welcome Back!</h1>
      </div>
      <div className="flex flex-col items-center">
        <form
          className="flex flex-col mt-8 gap-3 items-center w-full"
          action=""
        >
          <input
            className="w-1/3 outline-none p-2 rounded-xl shadow-lg placeholder:text-slate-400 shadow-slate-900/50 drop-shadow border-2 border-slate-900"
            type="email"
            placeholder="user@example.com"
            id="email"
            name="email"
            required
          />
          <input
            className="w-1/3 outline-none p-2 rounded-xl shadow-lg placeholder:text-slate-400 shadow-slate-900/50 drop-shadow border-2 border-slate-900"
            type="password"
            placeholder="********"
            id="password"
            name="password"
            required
          />
          <button
            className="p-2 bg-slate-900 w-1/5 text-slate-100 rounded-xl text-xl"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="flex gap-1 relative py-5 items-center w-1/3">
          <div className="flex-grow border-t border-gray-400"></div>
          <p className="flex-shrink-0 mx-4 text-gray-400">or</p>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <button onClick={() => handleAuth("github")}>
            <FaGithub className="bg-slate-900 text-slate-100 text-4xl rounded-full p-2" />
          </button>
          <button onClick={() => handleAuth("google")}>
            <FaGoogle className="bg-slate-900 text-slate-100 text-4xl rounded-full p-2" />
          </button>
        </div>
        <p className="mt-2">
          Don&apos;t have an account?{" "}
          <Link href="/createAccount" className="underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
