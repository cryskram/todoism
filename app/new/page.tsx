"use client";

import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function CreateTodoPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  return (
    <div className="mt-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold">Add a new Todo</h1>
        <form
          className="flex flex-col w-1/3 gap-3 mt-6"
          action="/api/todo"
          method="POST"
        >
          <input
            className="p-2 font-semibold placeholder:text-slate-400 placeholder:font-semibold rounded-xl outline-none border-2 border-slate-900 shadow-xl shadow-slate-900/50"
            type="text"
            id="title"
            name="title"
            placeholder="Goto Shopping"
          />
          <input
            className="p-2 font-semibold placeholder:text-slate-400 placeholder:font-semibold rounded-xl outline-none border-2 border-slate-900 shadow-xl shadow-slate-900/50"
            type="text"
            id="description"
            name="description"
            placeholder="Buy some veggies"
          />
          <button
            className="mx-auto text-xl w-1/2 rounded-xl p-2 bg-slate-900 text-slate-100"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
