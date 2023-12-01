const allWeatherConditions = {
    'Clouds': 'images/SVG/cloudy.svg',
    'Clear': 'images/SVG/sun.svg',
    'Snow': 'images/SVG/snow.svg',
    'Rain': 'images/SVG/rainy.svg',
    'Thunderstorm': 'images/SVG/lighting.svg',


}

const renderData = () => {

}

const changeCity = (city) => {
    const cityName = document.querySelector('city-name');
    cityName.value = city;
}