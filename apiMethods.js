import API_KEY from "./api_key.mjs"


const urlBuilder = (CITY_NAME) => {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${API_KEY}`
}

const getWeatherData = async (CITY_NAME) => {
    try {
        const response = await fetch(urlBuilder(CITY_NAME));
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.error(error);
    }
}

export { urlBuilder, getWeatherData }