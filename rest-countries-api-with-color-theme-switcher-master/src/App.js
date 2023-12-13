import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import CountriesPage from "./components/Countries/countriesPage";
import { getAllCountries } from "./services/countriesServices";
import { CountryContext } from "./context/CountryContext";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data } = await getAllCountries();
        console.log(data);

        setCountries(data);

        setLoading(false);
      } catch (err) {
        console.error("Error:", err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <CountryContext.Provider
        value={{
          loading,
          setLoading,
          countries,
          setCountries,
        }}
      >
        <Navbar />
        <CountriesPage />
      </CountryContext.Provider>
    </>
  );
};

export default App;
