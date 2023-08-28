import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();
  const description = data.get("description")?.valueOf();

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  if (typeof description !== "string") {
    throw new Error("Invalid Description");
  }

  await prisma.todo.create({ data: { title, description, complete: false } });
  redirect("/");
}

export default function page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Add New ToDo</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border border-slate-300 bg-transparent rounded px-2 py-3
        outline-none focus-within:border-slate-100"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="border border-slate-300 bg-transparent rounded px-2 py-6
        outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 outline-none">
            Add ToDo
          </button>
        </div>
      </form>
    </>
  );
}
