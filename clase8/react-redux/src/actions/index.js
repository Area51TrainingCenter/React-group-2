import axios from 'axios';

const API_KEY = '671eb2ed1d9dcfeded02a1e0753f71be';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";
export const CLEAN_LIST = "CLEAN_LIST";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},pe`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

export function cleanList() {
  return {
    type: CLEAN_LIST,
  }
}