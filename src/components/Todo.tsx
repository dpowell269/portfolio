import { useState } from "react";
import Input from "./Input";
import TodoItem from "./TodoItem";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { type ListProps } from "../types/TodoItemTypes";

export default function Todo() {
  const [input, setInput] = useState("");
  const [items, setItems] = useLocalStorage<ListProps[]>("todos", []);
  const [filter, setFilter] = useState<"all" | "todo" | "complete">("all");

  function handleAdd() {
    if (!input.trim()) return;
    setItems((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: input.trim(), done: false },
    ]);
    setInput("");
  }

  function handleToggle(id: string) {
    setItems((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  function handleDelete(id: string) {
    setItems((prev) => prev.filter((todo) => todo.id !== id));
  }

  const filteredItems = items.filter((todo) => {
    if (filter === "todo") return !todo.done;
    if (filter === "complete") return todo.done;
    return true;
  });
  return (
    <div>
      <Input input={input} setInput={setInput} handleAdd={handleAdd} />
      <div>
        <h3>Filters</h3>
        <div className="flex gap-[16px]">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("complete")}>Complete</button>
          <button onClick={() => setFilter("todo")}>Todo</button>
        </div>
      </div>
      <div>
        <ul>
          {filteredItems.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
