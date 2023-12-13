import { createContext } from "react";

export const CountryContext = createContext({
  loadding: false,
  setLoading: () => {},
  countries: [],
  setCountries: () => {},
});
