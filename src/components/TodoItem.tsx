import { useState, useRef, useEffect } from "react";
import { type ListProps } from "../types/TodoItemTypes";

type TodoItemProps = ListProps & {
  handleToggle: (value: string) => void;
  handleDelete: (value: string) => void;
  handleEdit: (id: string, newName: string) => void;
};

export default function TodoItem({
  name,
  id,
  done,
  handleToggle,
  handleDelete,
  handleEdit,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(name);
  const editRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isEditing) {
      editRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <li className="flex gap-[12px]">
      <input type="checkbox" checked={done} onChange={() => handleToggle(id)} />
      {isEditing ? (
        <input
          ref={editRef}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      ) : (
        <span>{name}</span>
      )}

      {isEditing ? (
        <button
          onClick={() => {
            handleEdit(id, editValue);
            setIsEditing(false);
          }}
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      )}

      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
}
