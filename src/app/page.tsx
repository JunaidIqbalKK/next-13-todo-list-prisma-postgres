import { prisma } from "@/db";
import Link from "next/link";
import TodoItem from "@/components/todo";

function getTodos() {
  return prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
}

async function toggleTodo(id: String, complete: Boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function page() {
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center mb-10 mt-10">
        <h1 className="text-4xl">ToDo List</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 outline-none"
          href="/new-todo"
        >
          New ToDo
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
