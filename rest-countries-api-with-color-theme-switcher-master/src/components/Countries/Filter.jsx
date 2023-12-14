import RegionCountry from "./RegionCountry";
import SearchCountry from "./SearchCountry";

const Filter = () => {
  return (
    <div className="flex mt-10 px-10 md:px-20">
      <div className="container mx-auto">
        <div className="flex md:justify-between flex-wrap flex-col md:flex-row md:flex-nowrap md:items-center items-start">
          <SearchCountry />
          <RegionCountry />
        </div>
      </div>
    </div>
  );
};

export default Filter;
