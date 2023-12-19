import { Routes, Route } from "react-router-dom";
import { CountriesPage, Country, PageNotFound } from "../components";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CountriesPage />} />
      <Route path="/countries/:countryName" element={<Country />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
