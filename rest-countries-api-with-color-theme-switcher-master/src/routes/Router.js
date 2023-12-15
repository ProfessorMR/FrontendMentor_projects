import { Routes, Route } from "react-router-dom";
import { CountriesPage, Country } from "../components";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CountriesPage />} />
      <Route path="/:countryName" element={<Country />} />
    </Routes>
  );
};

export default Router;
