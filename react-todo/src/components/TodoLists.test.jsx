import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList";

describe("TodoList", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
    expect(screen.getByText("Write React tests")).toBeInTheDocument();
    expect(screen.getByText("Call mom")).toBeInTheDocument();
  });

  test("adds a new todo", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo");
    const addBtn = screen.getByRole("button", { name: /add/i });

    await user.type(input, "Learn RTL");
    await user.click(addBtn);

    expect(screen.getByText("Learn RTL")).toBeInTheDocument();
  });

  test("ignores empty or whitespace-only input", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo");
    const addBtn = screen.getByRole("button", { name: /add/i });

    // try spaces
    await user.type(input, "   ");
    await user.click(addBtn);

    // initial items remain; no blank item added
    expect(screen.getAllByRole("checkbox").length).toBe(3);
  });

  test("trims input", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo");
    const addBtn = screen.getByRole("button", { name: /add/i });

    await user.type(input, "   Learn Jest   ");
    await user.click(addBtn);

    expect(screen.getByText("Learn Jest")).toBeInTheDocument();
  });

  test("toggles a todo's completion state and applies line-through", () => {
    render(<TodoList />);

    // "Buy milk" starts unchecked
    const checkbox = screen.getByLabelText("Toggle Buy milk");
    expect(checkbox).not.toBeChecked();

    // Toggle to completed
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    // Tailwind style 'line-through' applied via className
    const textEl = screen.getByText("Buy milk");
    expect(textEl.className).toMatch(/line-through/);
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    const target = screen.getByText("Call mom");
    const delBtn = screen.getByRole("button", { name: "Delete Call mom" });

    fireEvent.click(delBtn);
    expect(target).not.toBeInTheDocument();
  });
});
