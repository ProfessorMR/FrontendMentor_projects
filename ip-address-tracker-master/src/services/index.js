import axios from "axios";

const SERVER_URL = "https://geo.ipify.org/api/v2/country,city?";
const API_KEY = "at_2FnWbXYu3zfhyiCXoL4YjOfYFetKH";

export const fetchGeoData = (keySearch, valueSearch) => {
  try {
    const url = `${SERVER_URL}apikey=${API_KEY}&${keySearch}=${valueSearch}`;
    const response = axios.get(url);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
