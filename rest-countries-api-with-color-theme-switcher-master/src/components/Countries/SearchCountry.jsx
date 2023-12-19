import { useContext } from "react";
import { CountryContext } from "../../context/CountryContext";

const SearchCountry = () => {
  const { setQuerySearch } = useContext(CountryContext);

  return (
    <div className="search-area rounded shadow-md md:w-96 w-full">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="py-4 flex items-center flex-row-reverse justify-end">
          <input
            type="text"
            placeholder="Search for a country..."
            className="border-none outline-none text-sm font-semibold w-full pe-4"
            onChange={(e) => setQuerySearch(e.target.value)}
          />
          <button
            className="w-16 cursor-default h-full flex items-center justify-center"
          >
            <ion-icon name="search-outline" className="text-lg"></ion-icon>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchCountry;
