import { useState } from "react";
import { type ListProps } from "../types/TodoItemTypes";
type TodoItemProps = {
  handleDelete: (id: string) => void;
  handleToggle: (id: string) => void;
  handleEdit: (id: string, newName: string) => void;
} & ListProps;

export default function TodoItem({
  name,
  done,
  id,
  handleDelete,
  handleToggle,
  handleEdit,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(name);

  function handleSave() {
    handleEdit(id, editValue);
    setIsEditing(false);
  }
  return (
    <li className="flex gap-[12px]">
      <input type="checkbox" checked={done} onChange={() => handleToggle(id)} />

      {isEditing ? (
        <input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      ) : (
        <span>{name}</span>
      )}

      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>edit</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </>
      )}
    </li>
  );
}
