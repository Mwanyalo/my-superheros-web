import axios from "axios";

const prodUrl = "https://superheroapi.com/api.php/248393186523534";
axios.defaults.baseURL = prodUrl;
export default axios;
