type SearchProps = {
  query: string;
  setQuery: (value: string) => void;
};
export default function Search({ query, setQuery }: SearchProps) {
  return (
    <div className="flex justify-center">
      <h2>Search all todos</h2>
      <input
        className="border p-2 mb-4"
        type="search"
        placeholder="search todos"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
