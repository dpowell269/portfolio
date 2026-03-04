type InputProps = {
  input: string;
  setInput: (value: string) => void;
  handleAdd: () => void;
};

export default function Input({ input, setInput, handleAdd }: InputProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="add text here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>add</button>
    </div>
  );
}
