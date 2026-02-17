import { useReducer } from "react";

type Actions =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

function reducer(state: number, action: Actions) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  function handleAdd() {
    dispatch({ type: "increment" });
  }

  function handleSubtract() {
    dispatch({ type: "decrement" });
  }

  function handleReset() {
    dispatch({ type: "reset" });
  }

  return (
    <div>
      <h2>Counter {count}</h2>

      <div>
        <button
          onClick={handleSubtract}
          className="p-[10px] border rounded-md mt-[8px]"
        >
          -
        </button>

        <button
          onClick={handleAdd}
          className="p-[10px] border rounded-md mt-[8px]"
        >
          +
        </button>
      </div>

      <button
        onClick={handleReset}
        className="p-[10px] border rounded-md mt-[8px]"
      >
        Reset
      </button>
    </div>
  );
}
