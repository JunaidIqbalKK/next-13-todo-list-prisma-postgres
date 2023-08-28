"use client";

import Link from "next/link";

type TodoProps = {
  id: string;
  title: string;
  description: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export default function TodoItem({
  id,
  title,
  description,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoProps) {
  return (
    <div>
      <div className="flex gap-1 items-center">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="cursor-pointer text-lg peer-checked:line-through peer-checked:text-slate-400"
        >
          {title}
        </label>
      </div>
      <label htmlFor={id} className="text-slate-400 text-sm ml-5">
        {description}
      </label>
      <div className="flex gap-1 justify-end text-center mt-5">
        <button
          className="border border-slate-300 text-red-400 px-2 py-1 rounded hover:bg-slate-700 outline-none"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
        <Link
          className="border border-slate-300 text-blue-400 px-2 py-1 rounded hover:bg-slate-700 outline-none"
          href={"/edit-todo/" + id}
        >
          Edit
        </Link>
      </div>
    </div>
  );
}
