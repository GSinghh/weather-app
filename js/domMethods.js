const allWeatherConditions = {
    'Clouds': 'images/SVG/cloudy.svg',
    'Clear': 'images/SVG/sun.svg',
    'Snow': 'images/SVG/snow.svg',
    'Rain': 'images/SVG/rainy.svg',
    'Thunderstorm': 'images/SVG/lighting.svg',
};

const renderData = (avgTemps, weatherPerDay) => {
    const weatherContainer = document.querySelector('.weather-container');
    weatherContainer.innerHTML = ' ';
    for (const index in avgTemps)
    {
        let temp = avgTemps[index];
        let weatherCondition = weatherPerDay[index];
        // console.log(index, temp, allWeatherConditions[weatherCondition]);
        let newDiv = createDiv(allWeatherConditions[weatherCondition], temp, index)
        weatherContainer.appendChild(newDiv);
    }
}

const createDiv = (path, temp, date) => {
    
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class','weather-icon');

    //Creating Image
    const image = document.createElement('img');
    image.src = path;

    const weatherTemp = document.createElement('div');
    weatherTemp.setAttribute('class','weather-temp');
    weatherTemp.textContent = temp;

    const weatherDate = document.createElement('div');
    weatherDate.setAttribute('class', 'weather-date');
    weatherDate.textContent = date;

    newDiv.appendChild(image);
    newDiv.appendChild(weatherTemp);
    newDiv.appendChild(weatherDate);

    return newDiv;

}

const changeCity = (city) => {
    const cityName = document.querySelector('.city-name');
    cityName.textContent = city;
}

export {changeCity, renderData}