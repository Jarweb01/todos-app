import { useState } from "react";
import type { FormEvent } from "react";

type TTodoInput = {
  onAdd: (text: string) => void;
};

export default function TodoInput({ onAdd }: TTodoInput) {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todoText = text.trim();
    if (!todoText) return;

    onAdd(todoText);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full p-4 text-xl border-b outline-none placeholder-gray-400"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}
