import { useContext } from "react";
import CountryCard from "./CountryCard";
import { CountryContext } from "../../context/CountryContext";
import Spinner from "../Spinner";
import emptyData from "../../assets/images/empty-data.png";

const Countries = () => {
  const { loading, filterCountries } = useContext(CountryContext);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="my-10 country-cards-main px-10 md:px-20">
          <div className="container mx-auto">
            {filterCountries.length > 0 ? (
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-10 xl:gap-20">
                {filterCountries.map((country) => (
                  <CountryCard key={country.name.common} country={country} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <img src={emptyData} className="w-72" alt="empty" />
                <h1 className="font-semibold">Country is not found :(</h1>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Countries;
