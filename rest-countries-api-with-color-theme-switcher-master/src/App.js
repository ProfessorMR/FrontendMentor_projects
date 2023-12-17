import { useEffect, useState, useCallback } from "react";
import "./App.css";
import { Navbar } from "./components";
import {
  getAllCountries,
  getCountriesFromRegion,
  getCountry,
} from "./services/countriesServices";
import { CountryContext } from "./context/CountryContext";
import _ from "lodash";
import Router from "./routes/Router";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [filterCountries, setFilterCountries] = useState([]);
  const [querySearch, setQuerySearch] = useState("");

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await getAllCountries();

      setFilterCountries(data);

      setLoading(false);
    } catch (err) {
      console.error("Error:", err.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredCountriesBySearch = useCallback(async () => {
    try {
      setLoading(true);

      if (querySearch.trim() === "") {
        fetchData();
      } else {
        let { data } = await getCountry(querySearch);

        setFilterCountries(data);
      }

      setLoading(false);
    } catch (err) {
      setFilterCountries([]);

      setLoading(false);
    }
  }, [querySearch, fetchData]);

  useEffect(() => {
    const debouncedSearch = _.debounce(() => {
      filteredCountriesBySearch();
    }, 1000);

    debouncedSearch();

    return () => {
      debouncedSearch.cancel();
    };
  }, [querySearch, filteredCountriesBySearch]);

  const filteredCountriesByRegion = async (continent) => {
    try {
      setLoading(true);

      const { data } = await getCountriesFromRegion(continent);

      setFilterCountries(data);

      setLoading(false);
    } catch (err) {
      console.log("Error:", err.message);
      setLoading(false);
    }
  };

  const countryRegionFilter = _.debounce((continent) => {
    if (continent === "" || continent === "All") {
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
          filterCountries,
          setFilterCountries,
          countryRegionFilter,
          querySearch,
          setQuerySearch,
        }}
      >
        <Navbar />
        <Router />
      </CountryContext.Provider>
    </>
  );
};

export default App;
