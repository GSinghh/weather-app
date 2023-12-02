import { getWeatherData } from './apiMethods.js'
import { organizeDataByDay, calcAverageTempAndConditions } from './utils.js'; 
import { changeCity, renderData } from './domMethods.js';

document.getElementById('city').addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.getElementById('search-bar');
    const cityName = input.value;
    const weatherData = await getWeatherData(cityName);
    if(weatherData) {
        const dayData = organizeDataByDay(weatherData);
        const {averageTemps, weatherPerDay} = calcAverageTempAndConditions(dayData);
        renderData(averageTemps, weatherPerDay);
        changeCity(cityName);
    }
    input.value = ' ';
});
