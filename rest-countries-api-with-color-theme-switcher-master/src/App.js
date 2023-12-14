import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import CountriesPage from "./components/Countries/countriesPage";
import { getAllCountries } from "./services/countriesServices";
import { CountryContext } from "./context/CountryContext";
import _ from "lodash";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data } = await getAllCountries();

        setCountries(data);
        setFilterCountries(data);

        setLoading(false);
      } catch (err) {
        console.error("Error:", err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const countrySearchFilter = _.debounce((query) => {
    if (!query) {
      setFilterCountries([...countries]);
    } else {
      setFilterCountries((filteredCountries) => {
        return filteredCountries.filter((filterCountry) =>
          filterCountry.name.common.toLowerCase().includes(query.toLowerCase())
        );
      });
    }
  }, 1000);

  return (
    <>
      <CountryContext.Provider
        value={{
          loading,
          setLoading,
          countries,
          setCountries,
          countrySearchFilter,
          filterCountries,
          setFilterCountries,
        }}
      >
        <Navbar />
        <CountriesPage />
      </CountryContext.Provider>
    </>
  );
};

export default App;
