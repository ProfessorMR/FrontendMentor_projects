const SearchCountry = () => {
  return (
    <div className="search-area rounded shadow-md w-96">
      <form >
        <div className="py-4 flex items-center flex-row-reverse">
          <input
            type="text"
            placeholder="Search for a country..."
            className="border-none outline-none text-sm font-semibold"
          />
          <button type="submit" className="w-16 h-full flex items-center justify-center">
            <ion-icon name="search-outline" className="text-lg"></ion-icon>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchCountry;
