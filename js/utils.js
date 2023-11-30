var months = {
    1: "Jan",
    2: "Feb",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
};

const formatDate = (date) => {
    const dateSplit = date.split('-');
    return months[dateSplit[1]] + ' ' + dateSplit[2];
}

const convertKelvinToFahrenheit = (temp) => {
    return Math.round((temp - 273.15) * (9/5) + 32)
}

const organizeDataByDay = (weatherData) => {
    const dayData = {}
    
    weatherData.list.forEach(index => {
        const date = index.dt_txt.split(' ')[0];
        
        if(!dayData[date]) {
            dayData[date] = [];
        }

        dayData[date].push(index);
    })

    return dayData;
}

const calcAverageTempAndConditions = (organizedData) => {

    let averageTemps = {};
    let weatherConditons = {};
    
    for(const key in organizedData)
    {
        if(organizedData.hasOwnProperty(key))
        {
            let totalTemp = 0;
            const weatherItems = organizedData[key];

            for(const index in weatherItems)
            {
                if(!weatherConditons.hasOwnProperty(formatDate(key)))
                {
                    weatherConditons[formatDate(key)] = [weatherItems[index].weather[0].main];
                }
                else
                {
                    weatherConditons[formatDate(key)].push(weatherItems[index].weather[0].main)
                }

                if(weatherItems.hasOwnProperty(index))
                {
                    totalTemp += weatherItems[index].main.temp;
                    // console.log(key, weatherItems[index].weather[0].main);
                }
            }
            const averageTemp = totalTemp / weatherItems.length;
            averageTemps[formatDate(key)] = convertKelvinToFahrenheit(averageTemp) + '°';
        }

    }
    let weatherPerDay = weatherConditionHelper(weatherConditons);
    return { averageTemps, weatherPerDay };
}

const weatherConditionHelper = (weatherConditions) => {
    
    let weatherPerDay = {};
    for (const key in weatherConditions) {
        if (weatherConditions.hasOwnProperty(key)) {
            let conditionsArray = weatherConditions[key];
            let word = frequencyCounter(conditionsArray);
            weatherPerDay[key] = word;
        }
    }
    return weatherPerDay;
}

const frequencyCounter = (conditionsArray) => {
    let wordCount = {};

    // Iterate over the array and count the occurrences of each word
    conditionsArray.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    // Find the word that appears the most
    let maxWord = Object.keys(wordCount).reduce((a, b) => wordCount[a] > wordCount[b] ? a : b);

    return maxWord;

}

export { organizeDataByDay, formatDate, convertKelvinToFahrenheit, calcAverageTempAndConditions }