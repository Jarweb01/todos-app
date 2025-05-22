import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import TodoList from "./TodoList";

const todos = [
  { id: "1", text: "First task", completed: false },
  { id: "2", text: "Second task", completed: true },
];

describe("TodoList", () => {
  it("renders all todos", () => {
    render(<TodoList todos={todos} onToggle={vi.fn()} />);

    expect(screen.getByText("First task")).toBeInTheDocument();
    expect(screen.getByText("Second task")).toBeInTheDocument();
  });
});
