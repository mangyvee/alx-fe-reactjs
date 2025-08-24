import { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const initialTodos = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Write React tests", completed: true },
  { id: 3, text: "Call mom", completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>

      <AddTodoForm onAdd={addTodo} />

      <ul aria-label="Todo items" className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md shadow-sm"
          >
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
                aria-label={`Toggle ${todo.text}`}
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span
                className={todo.completed ? "line-through text-gray-400" : ""}
              >
                {todo.text}
              </span>
            </label>

            <button
              aria-label={`Delete ${todo.text}`}
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
