import { useState } from "react";
import { type ListProps } from "../types/TodoItemTypes";
import Input from "./Input";
import TodoItem from "./TodoItem";

type FilterProps = "all" | "todo" | "complete";

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
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  function handleDelete(id: string) {
    setItems((prev) => prev.filter((todo) => todo.id !== id));
  }

  function handleEdit(id: string, newName: string) {
    setItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, name: newName } : todo)),
    );
  }

  const filteredItems = items.filter((todo) => {
    if (filter === "todo") return !todo.done;
    if (filter === "complete") return todo.done;
    return true; // important fallback for "all"
  });
  return (
    <div className="m-[20px]">
      <Input input={input} setInput={setInput} handleAdd={handleAdd} />
      <div className="flex gap-[12px]">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("todo")}>todo</button>
        <button onClick={() => setFilter("complete")}>complete</button>
      </div>
      <ul>
        {filteredItems.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
}
