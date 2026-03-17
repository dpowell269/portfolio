import React from "react";
import { type ListProps } from "../types/TodoItemTypes";

type TodoItemProps = ListProps & {
  handleToggle: (value: string) => void;
  handleDelete: (value: string) => void;
};

const TodoItem = React.memo(function TodoItem({
  name,
  done,
  id,
  handleToggle,
  handleDelete,
}: TodoItemProps) {
  console.log("Rendering:", name);

  return (
    <li>
      <input type="checkbox" checked={done} onChange={() => handleToggle(id)} />
      {name}
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
});

export default TodoItem;
