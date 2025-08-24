import { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Add Todo Form"
      className="flex items-center gap-2"
    >
      <input
        placeholder="Add a new todo"
        aria-label="New todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-grow px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
}
