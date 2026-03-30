type FilterProps = {
  searchQuery: string;
  placeholder?: string;
  onSearchChange: (value: string) => void;
};

const Filter = ({
  searchQuery,
  placeholder = "Search...",
  onSearchChange,
}: FilterProps) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Filter;
