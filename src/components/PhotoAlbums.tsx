import { type ApiProps } from "../types/ApiTypes";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

export default function PhotoAlbums() {
  const [albums, setAlbums] = useState<ApiProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

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

  if (isLoading) return <p>Loading.........</p>;
  if (error) return <p>{error}</p>;

  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedAlbums = albums.slice(startIndex, endIndex);

  const totalPages = Math.ceil(albums.length / itemsPerPage);

  function handleNext() {
    setCurrentPage((prev) => prev + 1);
  }

  function handlePrev() {
    setCurrentPage((prev) => prev - 1);
  }

  function handleReset() {
    setCurrentPage(1);
  }

  return (
    <div>
      <h1>Albums</h1>
      {paginatedAlbums.map((album) => (
        <div key={album.id}>
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
