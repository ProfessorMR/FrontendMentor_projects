import { createContext } from "react";

export const CountryContext = createContext({
  loading: false,
  setLoading: () => {},
  countries: [],
  setCountries: () => {},
  countrySearchFilter: () => {},
  filterCountries: [],
  setFilterCountries: () => {},
  countryRegionFilter: () => {},
});
