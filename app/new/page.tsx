"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function CreateTodoPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/login");
    },
  });

  return (
    <div>
      <h1>Create New Todo Page</h1>
    </div>
  );
}
