import { useRef, useEffect } from "react";
type InputProps = {
  input: string;
  setInput: (value: string) => void;
  placeholder: string;
  handleAddInput: () => void;
};
export default function Input({
  input,
  setInput,
  placeholder,
  handleAddInput,
}: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    console.log("effect rendered");
    inputRef.current?.focus();
  }, [input]);
  return (
    <div>
      <input
        ref={inputRef}
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddInput}>Add</button>
    </div>
  );
}
