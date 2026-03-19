type InputProps = {
  input: string;
  setInput: (value: string) => void;
  handleAdd: () => void;
};
export default function Input({ input, setInput, handleAdd }: InputProps) {
  const isDisabled = input.trim().length < 3;
  return (
    <div>
      <input
        type="text"
        placeholder="start Typing. . ."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleAdd}
        disabled={isDisabled}
        className={isDisabled ? "" : "underline"}
      >
        add
      </button>
    </div>
  );
}
