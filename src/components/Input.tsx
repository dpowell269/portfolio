type InputProps = {
  input: string;
  setInput: (value: string) => void;
  handleAdd: () => void;
};

export default function Input({ input, setInput, handleAdd }: InputProps) {
  return (
    <div>
      <input
        placeholder="start typing..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
