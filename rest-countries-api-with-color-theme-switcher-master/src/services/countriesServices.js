import axios from "axios";

const SERVER_URL = "https://restcountries.com/";

export const getAllCountries = () => {
  const url = `${SERVER_URL}/v3.1/all`;

  return axios.get(url);
};

export const getCountry = (name) => {
  const url = `${SERVER_URL}/v3.1/name/${name}`;

  return axios.get(url);
};

export const getCountriesFromRegion = (region) => {
  const url = `${SERVER_URL}/v3.1/region/${region}`;

  return axios.get(url);
};
