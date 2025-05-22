import { vi } from "vitest";

import { render, screen, fireEvent } from "@testing-library/react";
import TodoInput from "./TodoInput";

describe("TodoInput", () => {
  it("should add a new task when Enter is pressed", () => {
    const handleAdd = vi.fn();

    render(<TodoInput onAdd={handleAdd} />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "Test Task" } });

    const form = input.closest("form");
    if (!form) throw new Error("Form not found");

    fireEvent.submit(form);

    expect(handleAdd).toHaveBeenCalledWith("Test Task");
  });
});
