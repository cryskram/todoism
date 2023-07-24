import { prisma } from "@/lib/database";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await prisma.todo.delete({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json({ message: "done" });
}
