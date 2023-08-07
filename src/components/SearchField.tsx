import { Search } from "lucide-react";

const SearchField = () => {
  return (
    <div className="ctnr">
      <div className="relative mb-1">
        <input
          type="text"
          className="flex-1 border border-inputColor outline-none  font-bold body-xs placeholder:font-bold placeholder:text-opacity-25  text-secondary bg-inputColor py-[0.875rem] px-6 rounded-2xl w-full focus:border-primary invalid:border-error"
          placeholder="Search for any word..."
        />
        <button>
          <Search className="text-primary w-4 h-4 absolute right-6 bottom-1/2 translate-y-1/2" />
        </button>
      </div>
      {/* Error message */}
      <p className="text-error body-md font-normal"></p>
    </div>
  );
};

export default SearchField;
