import { getWeatherData, urlBuilder } from './apiMethods.js'

document.getElementById('city').addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Testing")
    const cityName = document.getElementById('search-bar').value;

    const weatherInfo = getWeatherData(cityName);
    console.log(weatherInfo);
});