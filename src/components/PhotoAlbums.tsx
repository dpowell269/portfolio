import { type ApiProps } from "../types/ApiTypes";
import { useEffect, useState, useMemo } from "react";
import Pagination from "./Pagination";

export default function PhotoAlbums() {
  const [albums, setAlbums] = useState<ApiProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    async function getAlbums() {
      try {
        setIsLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        if (!res.ok) {
          throw new Error(`Something went wrong ${res.status}`);
        }
        const data: ApiProps[] = await res.json();
        setAlbums(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    getAlbums();
  }, []);

  // Filter albums based on the query
  const filteredAlbums = useMemo(() => {
    return albums.filter((album) =>
      album.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [albums, query]);

  // Reset page when query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  if (isLoading) return <p>Loading.........</p>;
  if (error) return <p>{error}</p>;

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedAlbums = filteredAlbums.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredAlbums.length / itemsPerPage);

  function handleNext() {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  }

  function handlePrev() {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  }

  function handleReset() {
    setCurrentPage(1);
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <h1>Albums</h1>
      <input
        placeholder="Search albums"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 mb-4"
      />

      {paginatedAlbums.length === 0 && <p>No albums found.</p>}

      {paginatedAlbums.map((album) => (
        <div key={album.id} className="mb-4">
          <h3 className="text-xl">{album.title}</h3>
          <p>{album.url}</p>
          <img
            src={album.thumbnailUrl}
            alt={album.title}
            className="w-24 h-24 object-contain"
          />
        </div>
      ))}

      <Pagination
        total={totalPages}
        currentPage={currentPage}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleReset={handleReset}
      />
    </div>
  );
}
