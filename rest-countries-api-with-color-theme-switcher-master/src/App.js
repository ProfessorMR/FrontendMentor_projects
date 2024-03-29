import { useEffect, useState, useCallback } from "react";
import { Navbar } from "./components";
import {
  getAllCountries,
  getCountriesFromRegion,
} from "./services/countriesServices";
import { CountryContext } from "./context/CountryContext";
import Router from "./routes/Router";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [filterCountries, setFilterCountries] = useState([]);
  const [querySearch, setQuerySearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [activeRedirect, setActiveRedirect] = useState(false);

  const filteredCountries = useCallback(async () => {
    try {
      setLoading(true);

      let newData;

      if (activeRedirect) {
        newData = await getAllCountries();
        setActiveRedirect(false);
      }

      if (selectedRegion === "" || selectedRegion === "All") {
        newData = await getAllCountries();
      } else {
        newData = await getCountriesFromRegion(selectedRegion);
      }

      setFilterCountries(() => {
        return newData.data.filter((country) =>
          country.name.common
            .toLowerCase()
            .trim()
            .includes(querySearch.trim().toLowerCase())
        );
      });

      setLoading(false);
    } catch (err) {
      console.error("Error:", err.message);
      setFilterCountries([]);
      setLoading(false);
    }
  }, [querySearch, selectedRegion, activeRedirect]);

  useEffect(() => {
    filteredCountries();
  }, [filteredCountries]);

  useEffect(() => {
    const handlePopstate = () => {
      setActiveRedirect(true);
      setQuerySearch("");
      setSelectedRegion("");
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  return (
    <HelmetProvider>
      <CountryContext.Provider
        value={{
          loading,
          setLoading,
          setQuerySearch,
          filterCountries,
          setSelectedRegion,
          setActiveRedirect,
        }}
      >
        <Navbar />
        <Router />
        <Helmet>
          <title>
            Frontend Mentor | REST Countries API with color theme switcher
          </title>
        </Helmet>
      </CountryContext.Provider>
    </HelmetProvider>
  );
};

export default App;
