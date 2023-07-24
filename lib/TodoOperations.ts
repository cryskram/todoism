import axios from "axios";
import { prisma } from "./database";

export const getTodos = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  const todos = await prisma.todo.findMany({
    where: { userId: user?.id },
  });

  return todos;
};

export const toggleCompleted = async (id: string, completed: boolean) => {
  "use server";
  await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      completed: completed,
    },
  });
};

export const getAllTodos = async (email: string) => {
  const res = await axios.get(`/api/todo/${email}`);
  const data = await res.data;

  return data;
};
