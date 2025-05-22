import type { TTodo } from "../types";
import TodoItem from "./TodoItem";

type TTodoList = {
  todos: TTodo[];
  onToggle: (id: string) => void;
};

export default function TodoList({ todos, onToggle }: TTodoList) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
}
