import { useState } from "react";
import { useSearch } from "../hooks/useSearch";
import Input from "./Input";
import { type ListProps } from "../types/TodoItemTypes";
import TodoItem from "./TodoItem";
import Search from "./Search";

export default function Todo() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [items, setItems] = useState<ListProps[]>([]);
  const { query, setQuery, filteredItems } = useSearch(items, "name");

  function handleAdd() {
    if (!input.trim()) {
      return setError("Can not add empty field");
    } else {
      setError("");
      setItems((prev) => [
        ...prev,
        { id: crypto.randomUUID(), name: input, done: false },
      ]);
      setInput("");
    }
  }

  function handleToggle(id: string) {
    setItems((prev) =>
      prev.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      }),
    );
  }

  function handleEdit(id: string, newName: string) {
    setItems((prev) =>
      prev.map((todo) => {
        return todo.id === id ? { ...todo, name: newName } : todo;
      }),
    );
  }

  function handleDelete(id: string) {
    setItems((todo) => todo.filter((item) => item.id !== id));
  }

  function clearList() {
    setItems([]);
  }

  return (
    <div>
      <Search query={query} setQuery={setQuery} />
      <Input input={input} setInput={setInput} handleAdd={handleAdd} />
      {error && <p className="text-red-700">{error}</p>}
      <button onClick={clearList}>clear all</button>
      {filteredItems.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}
