import { useContext } from "react";
import CountryCard from "./CountryCard";
import { CountryContext } from "../../context/CountryContext";
import Spinner from "../Spinner";

const Countries = () => {
  const { loading, countries } = useContext(CountryContext);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="my-10 country-cards-main">
          <div className="container mx-auto px-20">
            <div className="grid grid-cols-4 gap-20">
              {countries.length > 0 &&
                countries.map((country) => (
                  <CountryCard key={country.name.common} country={country} />
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Countries;
