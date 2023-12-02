import API_KEY from "./api_key.mjs"


const urlBuilder = (CITY_NAME) => {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${API_KEY}`
}

const getWeatherData = async (CITY_NAME) => {
    try {
        const response = await fetch(urlBuilder(CITY_NAME));
        if(!response.ok)
        {
            throw new Error(`Failed to Fetch Weather Data, Status: ${response.status}` )
        }
        const weatherData = await response.json();
        clearErrorMessage();
        return weatherData;
    } catch (error) {
        console.error('Error fetching weather data', error);
        displayErrorMessage(`Error: ${error.message}`);
        return null;
    }
}

const displayErrorMessage = (message) => {
    const errorMessageDiv = document.querySelector('.error-message');
        if(errorMessageDiv) {
            errorMessageDiv.textContent = `Error: ${message}`;
        }
}

const clearErrorMessage = () => {
    const errorMessageDiv = document.querySelector('.error-message');
    if(errorMessageDiv)
    {
        errorMessageDiv.textContent = ' ';
    }
}

export { urlBuilder, getWeatherData }