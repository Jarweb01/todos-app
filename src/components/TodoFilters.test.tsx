import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import TodoFilters from "./TodoFilters";

describe("TodoFilters", () => {
  it("calls setFilter when a filter button is clicked", () => {
    const setFilter = vi.fn();
    render(
      <TodoFilters
        filter="all"
        setFilter={setFilter}
        clearCompleted={vi.fn()}
        itemsLeft={3}
      />
    );

    fireEvent.click(screen.getByText("Active"));
    expect(setFilter).toHaveBeenCalledWith("active");
  });

  it("calls clearCompleted when Clear completed button is clicked", () => {
    const clearCompleted = vi.fn();
    render(
      <TodoFilters
        filter="all"
        setFilter={vi.fn()}
        clearCompleted={clearCompleted}
        itemsLeft={1}
      />
    );

    fireEvent.click(screen.getByText("Clear completed"));
    expect(clearCompleted).toHaveBeenCalled();
  });

  it("shows correct number of items left", () => {
    render(
      <TodoFilters
        filter="all"
        setFilter={vi.fn()}
        clearCompleted={vi.fn()}
        itemsLeft={5}
      />
    );
    expect(screen.getByText("5 items left")).toBeInTheDocument();
  });
});
