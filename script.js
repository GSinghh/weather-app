import API_KEY from "./api_key.mjs"

const getDataFromForm = () => {
    const searchQuery = document.getElementById('search-bar');
    if(searchQuery)
    {
        return searchQuery.value;
    }
    else
    {
        return console.error("Invalid City Name")
    }
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


const urlBuilder = (CITY_NAME) => {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${API_KEY}`
}

// const city = getDataFromForm();
// console.log(city)
let obj = await getWeatherData("San Jose");
console.log(obj)



// const parseArray = () => {

//     const weatherData = [
//   // ... (your 40 weather objects)
// ];

// // Function to split array into chunks
// function chunkArray(arr, chunkSize) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += chunkSize) {
//     result.push(arr.slice(i, i + chunkSize));
//   }
//   return result;
// }

// // Split the weather data into chunks representing one day
// const dailyWeatherChunks = chunkArray(weatherData, 8);

// console.log(dailyWeatherChunks);


// }