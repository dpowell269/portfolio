import { useReducer } from "react";

type Action = { type: "increment" } | { type: "decrement" };

function reducer(state: number, action: Action): number {
  if (action.type === "increment") return state + 1;
  if (action.type === "decrement") return state - 1;
  return state;
}

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  function handleAdd(): void {
    dispatch({ type: "increment" });
  }

  function handleSubtract() {
    dispatch({ type: "decrement" });
  }
  return (
    <div className="m-[56px]">
      <h2 className="text-green-800 font-bold text-2xl">Counter</h2>
      <p className="text-yellow-500 font-bold text-lg mt-[16px]">{count}</p>
      <div className="grid grid-cols-2 mt-[16px]">
        <button onClick={handleSubtract} className="border rounded">
          -
        </button>
        <button
          onClick={handleAdd}
          className="transition-transform duration-300 hover:rotate-180"
        >
          +
        </button>
      </div>
    </div>
  );
}
