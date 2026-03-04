import { ListProps } from "../types/TodoItemTypes";

type TodoItemProps = ListProps & {
  onToggle: (value: string) => void;
  handleDelete: (value: string) => void;
};

export default function TodoItem({
  id,
  name,
  done,
  onToggle,
  handleDelete,
}: TodoItemProps) {
  return (
    <div className="flex gap-[8px] m-[12px]" key={id}>
      <input type="checkbox" checked={done} onChange={() => onToggle(id)} />
      <p>{name}</p>
      <button onClick={() => handleDelete(id)}>delete</button>
    </div>
  );
}
