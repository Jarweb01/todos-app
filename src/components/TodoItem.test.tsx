import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

import TodoItem from "./TodoItem";

const todo = { id: "1", text: "Test todo", completed: false };

describe("TodoItem", () => {
  it("renders todo text", () => {
    render(<TodoItem todo={todo} onToggle={vi.fn()} />);
    expect(screen.getByText("Test todo")).toBeInTheDocument();
  });

  it("calls onToggle when checkbox is clicked", () => {
    const onToggle = vi.fn();
    render(<TodoItem todo={todo} onToggle={onToggle} />);

    fireEvent.click(screen.getByRole("checkbox"));
    expect(onToggle).toHaveBeenCalledWith("1");
  });

  it("shows line-through when completed", () => {
    render(<TodoItem todo={{ ...todo, completed: true }} onToggle={vi.fn()} />);
    const text = screen.getByText("Test todo");
    expect(text).toHaveClass("line-through");
  });
});
