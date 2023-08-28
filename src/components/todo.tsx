"use client";

type TodoProps = {
  id: String;
  title: String;
  description: String;
  complete: Boolean;
  toggleTodo: (id: String, complete: Boolean) => void;
};

export default function TodoItem({
  id,
  title,
  description,
  complete,
  toggleTodo,
}: TodoProps) {
  return (
    <li className="mb-5">
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
          className="cursor-pointer text-lg peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>
      </div>
      <label htmlFor={id} className="text-slate-400 text-sm ml-5">
        {description}
      </label>
    </li>
  );
}
