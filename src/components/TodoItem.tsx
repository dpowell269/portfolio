import { useState } from "react";
import { type ListProps } from "../types/TodoItemTypes";

type TodoItemProps = {
  handleToggle: (value: string) => void;
  handleDelete: (value: string) => void;
  handleEdit: (id: string, newName: string) => void;
} & ListProps;

export default function TodoItem({
  name,
  done,
  id,
  handleToggle,
  handleDelete,
  handleEdit,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(name);

  function handleSave() {
    if (!editValue.trim()) return;
    handleEdit(id, editValue);
    setIsEditing(false);
  }

  return (
    <li className="flex gap-[12px]">
      <input type="checkbox" checked={done} onChange={() => handleToggle(id)} />
      {isEditing ? (
        <>
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {name}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </>
      )}
    </li>
  );
}
