import { useEffect, useMemo, useState } from "react";

export function useSearch<T>(items: T[], key: keyof T, delay = 400) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // 1. debounce query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);

    return () => clearTimeout(handler);
  }, [query, delay]);

  // 2. memoised filtering
  const filteredItems = useMemo(() => {
    if (!debouncedQuery) return items;

    return items.filter((item) => {
      const value = item[key];

      if (value == null) return false;

      return String(value).toLowerCase().includes(debouncedQuery.toLowerCase());
    });
  }, [items, debouncedQuery, key]);

  return {
    query,
    setQuery,
    filteredItems,
    debouncedQuery,
  };
}
