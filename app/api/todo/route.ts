import { prisma } from "@/lib/database";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";
export async function GET(req: Request) {
  const res = await prisma.todo.findMany();
  return NextResponse.json(res);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const formData = await req.formData();
  const todo_name = formData.get("title")?.toString() as string;
  const todo_description = formData.get("description")?.toString() as string;

  const todo = await prisma.user.update({
    where: { email: session?.user?.email as string },
    data: {
      todos: {
        create: {
          todo_name,
          todo_description,
          completed: false,
        },
      },
    },
  });

  return NextResponse.json(todo);
}
