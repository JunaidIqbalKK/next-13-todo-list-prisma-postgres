import { getTodos } from "@/components/actions";
import Link from "next/link";

export default async function page() {
  const todos = await getTodos();

  return (
    <>
      <h1 className="text-4xl text-center mt-10">
        ToDo List App (Next-JS 13.4)
      </h1>
      <div className="flex justify-center gap-12 items-center mb-10 mt-10">
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 outline-none"
          href="/new-todo"
        >
          New ToDo
        </Link>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 outline-none"
          href="/show-todos"
        >
          Show ToDos
        </Link>
      </div>
      <h1 className="text-xl text-center">
        You have {todos.length} ToDos right now...
      </h1>
    </>
  );
}
