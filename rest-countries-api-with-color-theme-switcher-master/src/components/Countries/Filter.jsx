import RegionCountry from "./RegionCountry";
import SearchCountry from "./SearchCountry";

const Filter = () => {
  return (
    <div className="flex mt-10 px-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-start">
          <SearchCountry />
          <RegionCountry />
        </div>
      </div>
    </div>
  );
};

export default Filter;
