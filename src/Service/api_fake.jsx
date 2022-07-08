import axios from "axios";

const ApiFake = axios.create({
  baseURL: "https://your-money-kenzie.herokuapp.com", //"http://localhost:3001"
});

export default ApiFake;