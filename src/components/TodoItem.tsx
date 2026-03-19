import { type ListProps } from "../types/TodoItemTypes";

type TodoItemProps = ListProps & {
  handleToggle: (value: string) => void;
  handleDelete: (value: string) => void;
};

export default function TodoItem({
  name,
  done,
  id,
  handleToggle,
  handleDelete,
}: TodoItemProps) {
  return (
    <li className="flex gap-[16px]">
      <input type="checkbox" checked={done} onChange={() => handleToggle(id)} />
      {name}
      <button>Edit</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
}
