import { useState } from "react";
import Input from "./Input";
import TodoItem from "./TodoItem";
import { type ListProps } from "../types/TodoItemTypes";

type FilterProps = "all" | "todo" | "complete";

export default function Todo() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState<ListProps[]>([]);
  const [filter, setFilter] = useState<FilterProps>("all");

  function handleAddInput() {
    if (!input.trim()) return;
    setItems((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: input, done: false },
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

  const filteredItems = items.filter((todo) => {
    if (filter === "complete") return todo.done;
    if (filter === "todo") return !todo.done;
    return true;
  });
  return (
    <div>
      <div>
        <Input
          input={input}
          setInput={setInput}
          placeholder="start typing"
          handleAddInput={handleAddInput}
        />
      </div>
      <div className="flex gap-[12px]">
        <h2>Filters:</h2>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("todo")}>Todo</button>
        <button onClick={() => setFilter("complete")}>Complete</button>
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
