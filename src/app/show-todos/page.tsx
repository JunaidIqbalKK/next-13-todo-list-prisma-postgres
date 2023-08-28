import Link from "next/link";
import TodoItem from "@/components/TodoItem";
import { getTodos, toggleTodo, deleteTodo } from "@/components/actions";

export default async function page() {
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center mb-10 mt-10">
        <Link className="text-4xl cursor-pointer hover:text-slate-300" href="/">
          ToDo List
        </Link>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 outline-none"
          href="/new-todo"
        >
          New ToDo
        </Link>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-slate-600 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <TodoItem
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          </div>
        ))}
      </div>
    </>
  );
}
