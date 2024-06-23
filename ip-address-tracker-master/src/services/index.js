import axios from "axios";

const SERVER_URL = "https://geo.ipify.org/api/v2/country,city?";
const API_KEY = "at_xRpKkpw6RC9b0otUbYYUm7e2JOgp3";

export const getGeoData = (keySearch, valueSearch) => {
  try {
    let url = null;

    if (keySearch === "" && valueSearch === "") {
      url = `${SERVER_URL}apiKey=${API_KEY}`;
    } else {
      url = `${SERVER_URL}apiKey=${API_KEY}&${keySearch}=${valueSearch}`;
    }
    const response = axios.get(url);

    return response;
  } catch (err) {
    return null;
  }
};
