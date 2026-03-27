type InputProps = {
  input: string;
  setInput: (value: string) => void;
  handleAdd: () => void;
};

export default function Input({ input, setInput, handleAdd }: InputProps) {
  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="start typing"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
