import axios from "axios";

const SERVER_URL = "https://restcountries.com/v3.1";

export const getAllCountries = () => {
  const url = `${SERVER_URL}/all`;

  return axios.get(url);
};

export const getCountry = (name) => {
  const url = `${SERVER_URL}/name/${name}?fullText=true`;

  return axios.get(url);
};

export const getCountriesFromRegion = (region) => {
  const url = `${SERVER_URL}/region/${region}`;

  return axios.get(url);
};

export const getCountryFromCode = (code) => {
  const url = `${SERVER_URL}/alpha/${code}`;

  return axios.get(url);
};
