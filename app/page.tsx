import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { getTodos, toggleCompleted } from "@/lib/TodoOperations";
import TodoItem from "@/components/TodoItem";

const HomePage = async () => {
  const session = await getServerSession(authOptions);
  let todos: any[] = [];
  if (session) {
    todos = await getTodos(session?.user?.email as string);
  } else {
    todos = [];
  }
  return (
    <div className="mt-10 flex flex-col w-full mx-auto items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-semibold">Todoism</h1>
        <p className="text-xl font-semibold">
          An end-to-end encrpyted Todo Manager
        </p>
      </div>
      <div className="mt-10 w-2/3">
        {session ? (
          <div className="">
            {todos.length === 0 ? (
              <div className="text-center">
                <Link href="/new">
                  You are all cought up!{" "}
                  <span className="underline underline-offset-2 font-semibold">
                    Add a Todo
                  </span>
                </Link>
              </div>
            ) : (
              <div className="w-full flex flex-col gap-2">
                <Link
                  href="/new"
                  className="text-xl mb-4 w-full text-center font-semibold underline underline-offset-2"
                >
                  Add More
                </Link>
                {todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    {...todo}
                    toggleCompleted={toggleCompleted}
                    title={todo.todo_name}
                    description={todo.todo_description ?? ""}
                    completed={todo.completed ?? false}
                    id={todo.id}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xl">
              You need to be logged in to see your Todos
            </p>
            <Link className="underline font-semibold" href="/auth/login">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
