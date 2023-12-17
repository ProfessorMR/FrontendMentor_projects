import { createContext } from "react";

export const CountryContext = createContext({
  loading: false,
  setLoading: () => {},
  countries: [],
  setCountries: () => {},
  querySearch: "",
  setQuerySearch: () => {},
  filterCountries: [],
  setFilterCountries: () => {},
  countryRegionFilter: () => {},
});
