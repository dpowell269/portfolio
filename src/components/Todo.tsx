import { useState } from "react";
import Input from "./Input";
import { type ListProps } from "../types/TodoItemTypes";
import TodoItem from "./TodoItem";

type FilterProps = "all" | "complete" | "todo";

export default function Todo() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState<ListProps[]>([]);
  const [filter, setFilter] = useState<FilterProps>("all");

  function handleAdd() {
    if (!input.trim()) return;
    setItems((prev) => [
      ...prev,
      { name: input, id: crypto.randomUUID(), done: false },
    ]);
    setInput("");
  }

  function handleToggle(id: string) {
    setItems((prev) =>
      prev.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      }),
    );
  }

  function handleDelete(id: string) {
    setItems((prev) => prev.filter((todo) => todo.id !== id));
  }

  function handleEdit(id: string, newName: string) {
    setItems((prev) =>
      prev.map((todo) => {
        return todo.id === id ? { ...todo, name: newName } : todo;
      }),
    );
  }

  const filteredItems = items.filter((prev) => {
    if (filter === "complete") return prev.done;
    if (filter === "todo") return !prev.done;
    return true;
  });
  return (
    <div>
      <Input input={input} setInput={setInput} handleAdd={handleAdd} />
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("todo")}>todo</button>
        <button onClick={() => setFilter("complete")}>complete</button>
      </div>
      <ul>
        {filteredItems.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
}
