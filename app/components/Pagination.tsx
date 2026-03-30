import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return;

  return (
    <div className="flex justify-center gap-2 mt-12">
      <button
        className={` px-3 py-1 rounded  ${currentPage !== 1 ? "bg-blue-600 text-white cursor-pointer" : "bg-gray-800 text-gray-700 cursor-not-allowed"}`}
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaArrowLeft />
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={` px-3 py-1 cursor-pointer rounded ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200"}`}
          type="button"
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={` px-3 py-1 rounded ${currentPage !== totalPages ? "bg-blue-600 text-white cursor-pointer" : "bg-gray-800 text-gray-700 cursor-not-allowed"}`}
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage == totalPages}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
