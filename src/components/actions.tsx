import { prisma } from "@/db";
import { redirect } from "next/navigation";

export async function getTodos() {
  return await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
}

export async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}

export async function deleteTodo(id: string) {
  "use server";

  await prisma.todo.delete({ where: { id } });
  redirect("/");
}
