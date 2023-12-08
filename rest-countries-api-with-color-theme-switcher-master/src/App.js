import "./App.css";
import {Navbar } from "./components";
import CountriesPage from "./components/Countries/countriesPage";

const App = () => {
  return (
    <>
      <Navbar />
      <CountriesPage/>
    </>
  );
};

export default App;
