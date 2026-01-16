type PaginationProps = {
  total: number;
  currentPage: number;
  handleNext: () => void;
  handlePrev: () => void;
  handleReset: () => void;
};

export default function Pagination({
  total,
  currentPage,
  handleNext,
  handlePrev,
  handleReset,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <button
        onClick={handlePrev}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Prev
      </button>

      <p className="text-sm font-medium text-gray-600">
        <span className="font-semibold text-gray-900">{currentPage}</span> of{" "}
        {total}
      </p>

      <button
        onClick={handleNext}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
      >
        Next
      </button>
      <button
        onClick={handleReset}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
      >
        Reset
      </button>
    </div>
  );
}
