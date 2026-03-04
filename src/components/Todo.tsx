import { useState } from "react";
import Input from "./Input";
import TodoItem from "./TodoItem";
import { type ListProps } from "../types/TodoItemTypes";

export default function Todo() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState<ListProps[]>([]);
  const [filter, setFilter] = useState<"all" | "todo" | "completed">("all");

  function handleAdd() {
    if (!input.trim()) return;

    setItems((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: input, done: false },
    ]);
    setInput("");
  }

  function onToggle(id: string) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  }

  function handleDelete(id: string) {
    setItems((items) => items.filter((iterator) => iterator.id !== id));
  }

  const filtered = items.filter((it) => {
    if (filter === "all") return true;
    if (filter === "todo") return !it.done;
    if (filter === "completed") return it.done;
  });

  return (
    <div>
      <Input input={input} setInput={setInput} handleAdd={handleAdd} />
      <button onClick={() => setFilter("all")}>all</button>
      <button onClick={() => setFilter("todo")}>todo</button>
      <button onClick={() => setFilter("completed")}>completed</button>

      {filtered.map((todo) => (
        <TodoItem
          id={todo.id}
          name={todo.name}
          done={todo.done}
          onToggle={onToggle}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
