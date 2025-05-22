import type { TTodo } from "../types";

type TTodoItem = {
  todo: TTodo;
  onToggle: (id: string) => void;
};

export default function TodoItem({ todo, onToggle }: TTodoItem) {
  return (
    <li className="flex items-center border-b px-4 py-2 text-xl">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="mr-4 h-5 w-5"
      />
      <span className={todo.completed ? "line-through text-gray-400" : ""}>
        {todo.text}
      </span>
    </li>
  );
}
