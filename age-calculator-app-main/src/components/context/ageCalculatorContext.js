import { createContext } from "react";

export const AgeCalculatorContext = createContext({
  dates: {},
  errors: {},
  results: {},
  setDates: () => {},
});
