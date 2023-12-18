import axios from "axios";

export const getData = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=633cf06f9f733423e912c311715de394&units=metric`;
  return axios.get(url);
};
