import { getWeatherData, urlBuilder } from './apiMethods.js'

document.getElementById('city').addEventListener("submit", async (e) => {
    e.preventDefault();
    const cityName = document.getElementById('search-bar').value;
    const weatherInfo = await getWeatherData(cityName);
    importantInfo(weatherInfo);
});

const importantInfo = (data) => {
    var weatherData = {
        "name": data.city.name,
        "temp": data.list[0].main.temp,
    }
    console.log(data);
    console.log(weatherData);
}