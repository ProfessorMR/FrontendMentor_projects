import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import CountriesPage from "./components/Countries/countriesPage";
import {
  getAllCountries,
  getCountriesFromRegion,
} from "./services/countriesServices";
import { CountryContext } from "./context/CountryContext";
import _ from "lodash";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, []);

  const countrySearchFilter = _.debounce((query) => {
    if (query === "") {
      setFilterCountries([...countries]);
    } else {
      setFilterCountries((filteredCountries) => {
        return filteredCountries.filter((filterCountry) =>
          filterCountry.name.common.toLowerCase().includes(query.toLowerCase())
        );
      });
    }
  }, 1000);

  const filteredCountriesByRegion = async (continent) => {
    try {
      setLoading(true);

      const { data } = await getCountriesFromRegion(continent);

      setCountries(data);
      setFilterCountries(data);

      setLoading(false);
    } catch (err) {
      console.log("Error:", err.message);
      setLoading(false);
    }
  };

  const countryRegionFilter = _.debounce((continent) => {
    if (continent === "") {
      setFilterCountries([...countries]);
    } else if (continent === "All") {
      fetchData();
    } else {
      filteredCountriesByRegion(continent);
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
          countryRegionFilter,
        }}
      >
        <Navbar />
        <CountriesPage />
      </CountryContext.Provider>
    </>
  );
};

export default App;
