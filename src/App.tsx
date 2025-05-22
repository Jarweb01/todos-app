import "./App.css";
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import type { TTodo } from "./types";
import { nanoid } from "nanoid";
import type { TFILTER_ITEMS } from "./types";

function App() {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [filter, setFilter] = useState<TFILTER_ITEMS>("all");

  const handleAdd = (text: string) => {
    setTodos([...todos, { id: nanoid(), text, completed: false }]);
  };

  const handleToggle = (id: string) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
  };

  const filtered = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div className="mx-auto min-h-screen bg-gray-100 p-4">
      <div className="w-full bg-white shadow-md rounded">
        <h1 className="text-6xl font-light text-center text-red-200 my-6">
          todos
        </h1>
        <TodoInput onAdd={handleAdd} />
        <TodoList todos={filtered} onToggle={handleToggle} />
        <TodoFilters
          filter={filter}
          setFilter={setFilter}
          clearCompleted={handleClearCompleted}
          itemsLeft={todos.filter((t) => !t.completed).length}
        />
      </div>
    </div>
  );
}

export default App;
