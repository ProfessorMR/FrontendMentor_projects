import axios from "axios";

const SERVER_URL = "https://geo.ipify.org/api/v2/country,city?";
const API_KEY = "at_2FnWbXYu3zfhyiCXoL4YjOfYFetKH";

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
    console.log(err);
  }
};
