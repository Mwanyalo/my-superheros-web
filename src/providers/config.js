import axios from "axios";

const prodUrl = "https://superheroapi.com/api/248393186523534";

axios.defaults.baseURL = prodUrl;

axios.defaults.headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Headers": "Accept",
};

export default axios;
