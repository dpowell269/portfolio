import { type ApiProps } from "../types/ApiTypes";
import { useEffect, useState } from "react";

export default function PhotoAlbums() {
  const [albums, setAlbums] = useState<ApiProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getAlbums() {
      try {
        setIsLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        if (!res.ok) {
          throw new Error(`Something went wrong ${res.status}`);
        }
        const data: ApiProps[] = await res.json();
        setAlbums(data.slice(0, 20));
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

  return (
    <div>
      <h1>Albums</h1>
      {albums.map((album) => (
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
    </div>
  );
}
