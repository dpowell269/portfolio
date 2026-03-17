import { useState, useMemo } from "react";
import Input from "./Input";
import TodoItem from "./TodoItem";
import { type ListProps } from "../types/TodoItemTypes";

type FilterProps = "all" | "todo" | "complete";

export default function Todo() {
  console.log("component render");
  const [input, setInput] = useState("");
  const [items, setItems] = useState<ListProps[]>([]);
  const [filter, setFilter] = useState<FilterProps>("all");

  function handleAdd() {
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
        return id === todo.id ? { ...todo, done: !todo.done } : todo;
      }),
    );
  }

  function handleDelete(id: string) {
    setItems((item) => item.filter((todo) => id !== todo.id));
  }

  const filteredItems = useMemo(() => {
    console.log("Memo render");
    return items.filter((todo) => {
      if (filter === "todo") return !todo.done;
      if (filter === "complete") return todo.done;
      return true;
    });
  }, [items, filter]);
  return (
    <div className="p-[20px]">
      <Input input={input} setInput={setInput} handleAdd={handleAdd} />
      <div>
        <div className="flex gap-[20px]">
          <button
            className={filter === "all" ? "underline" : "none"}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "todo" ? "underline" : "none"}
            onClick={() => setFilter("todo")}
          >
            Todo
          </button>
          <button
            className={filter === "complete" ? "underline" : "none"}
            onClick={() => setFilter("complete")}
          >
            Complete
          </button>
        </div>
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
