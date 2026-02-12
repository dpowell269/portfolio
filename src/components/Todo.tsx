import { useState, useEffect } from "react";

export default function Todo() {
  const [input, setInput] = useState<string>("");
  const [lists, setLists] = useState<{ id: string; name: string }[]>([]);

  function addName() {
    if (input === "") return;
    const newItem = {
      id: crypto.randomUUID(),
      name: input,
    };
    setLists((prev) => [...prev, newItem]);
    setInput("");
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Enter") {
        addName();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input, lists]);

  return (
    <div className="p-[10px]">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-[5px] border rounded-lg"
        placeholder="name"
      />
      <button onClick={addName}>Add Name</button>
      <div>
        <ul>
          {lists.map((list) => (
            <li key={list.id}>{list.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
