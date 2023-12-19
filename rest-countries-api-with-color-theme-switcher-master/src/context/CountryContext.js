import { createContext } from "react";

export const CountryContext = createContext({
  loading: false,
  setLoading: () => {},
  setQuerySearch: () => {},
  filterCountries: [],
  setSelectedRegion: () => {},
  setActiveRedirect: () => {},
});
